#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <netdb.h>
#include <arpa/inet.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("'%s <host>'형식으로 입력하세요.", argv[0]);
        exit(1);
    }

    struct addrinfo infovalue, *res, *p;
    char ip_answer[INET6_ADDRSTRLEN];

    memset(&infovalue, 0, sizeof infovalue);
    infovalue.ai_family = AF_UNSPEC; //IPv4 or IPv6
    infovalue.ai_socktype = SOCK_STREAM; //TCP 소켓

    if ((int errmsg = getaddrinfo(argv[1], NULL, &infovalue, &res)) != 0) { //호스트 정보를 얻고 에러 발생시 exit
        printf("%s\n", gai_strerror(errmsg));
        exit(1);
    }

    for (p = res; p != NULL; p = p->ai_next) { //얻은 호스트정보 출력
        void *addr;
        char *ipver;

        // IPv4 or IPv6
        if (p->ai_family == AF_INET) { //IPv4
            struct sockaddr_in *ipv4 = (struct sockaddr_in *)p->ai_addr;
            addr = &(ipv4->sin_addr);
            ipver = "IPv4";
        } else { // IPv6
            struct sockaddr_in6 *ipv6 = (struct sockaddr_in6 *)p->ai_addr;
            addr = &(ipv6->sin6_addr);
            ipver = "IPv6";
        }

        // IP 주소를 표준 형식으로 변환하여 출력합니다.
        inet_ntop(p->ai_family, addr, ip_answer, sizeof ip_answer);
        printf("%s: %s\n", ipver, ip_answer);
    }

    freeaddrinfo(res); // 결과 목록을 해제합니다.
    return 0;
}
