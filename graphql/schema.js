const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const query = require('./query/root_query_type');
const mutation = require('./mutation/root_mutation_type');

module.exports = new GraphQLSchema({
  query,
  mutation
});