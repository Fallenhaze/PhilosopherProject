const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const { auth } = require('./resolvers/auth')

const resolvers = {
  Query: {
    user(parent, { id }, ctx, info) {
      return ctx.db.query.user(
        { where: { id } },
        info
      )
    },
    product(parent, { id }, ctx, info) {
      return ctx.db.query.product(
        { where: { id } },
        info
      )
    },
    cart(parent, { id }, ctx, info){
      return ctx.db.mutation.user(
        { where: { id } },
        info
      )
    },
    philosopher(parent, { id }, ctx, info){
      return ctx.db.query.philosopher(
        { where: { id } },
          info
      )
    },
    allProducts(parent, {}, ctx, info) {
      return ctx.db.query.products({}, info)
    },
    allUsers(parent, {}, ctx, info) {
      return ctx.db.query.users({}, info)
    }
  },
  Mutation: {
    ...auth,
    updateUser(parent, { id, name, email, pw }, ctx, info) {
      return ctx.db.mutation.updateUser(
        {
          data: { name, email, pw },
          where: { id }
        },
        info,
      )
    },
    createProduct(parent, { name, imgURL, desc, price }, ctx, info) {
      return ctx.db.mutation.createProduct(
        { data: { name, imgURL, desc, price } },
        info,
      )
    },
    createPhilosopher(parent, { name, imgURL, timePeriod, region, branch, resource }, ctx, info) {
      return ctx.db.mutation.createProduct(
        { data: { name, timePeriod, region, branch, resource } },
        info,
      )
    },
    updateProduct(parent, { id, name, imgURL, desc, price }, ctx, info) {
      return ctx.db.mutation.updateProduct(
        {
          data: { name, imgURL, desc, price },
          where: { id }
        },
        info,
      )
    },
    updatePhilosopher(parent, { id, name, imgURL, timePeriod, region, branch, resource  }, ctx, info) {
      return ctx.db.mutation.updatePhilosopher(
        {
          data: { name, imgURL, timePeriod, region, branch, resource  },
          where: { id }
        },
        info,
      )
    },
    deleteProduct(parent, { id }, ctx, info){
      return ctx.db.mutation.deleteProduct(
        {
          where: { id }
        },
        info
      )
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-ebonychin-455/simple-store/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
