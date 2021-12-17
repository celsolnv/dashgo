import { createServer, Factory, Model } from 'miragejs'

type User = {
  name: string;
  email: string;
  create_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name() { },
        email() { },
        createAt() { },
      })

    },
    seeds(server) {

    },

    routes() {
      this.namespace = 'api'
      this.timing = 750; //750ms
      this.get("/users")
      this.post("/users")

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}