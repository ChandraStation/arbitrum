FROM archlinux/archlinux

RUN pacman -Syyu --noconfirm go yarn gcc cmake git make rocksdb boost

COPY arb-node /usr/bin/

COPY entrypoint.sh /usr/bin/ 

RUN  chmod +x /usr/bin/entrypoint.sh

EXPOSE 8547 8548 9642

ENTRYPOINT [ "entrypoint.sh" ]