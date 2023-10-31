FROM node:14-alpine as builder

WORKDIR /app
ADD ./package.json ./package.json
ADD ./yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

RUN yarn install --production --ignore-scripts --prefer-offline

FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/public ./public

EXPOSE 8080

CMD [ "node", "node_modules/.bin/next", "start", "-p", "8080"]
