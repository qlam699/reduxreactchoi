FROM node:10.5

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN chmod +x ./front_end_entry_point.sh

ENV PATH /usr/src/app/node_modules/.bin:$PATH


EXPOSE 3000

CMD ["bash", "./front_end_entry_point.sh"]