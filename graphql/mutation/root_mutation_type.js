const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = graphql;

const productAPI = require('../services/product');

const mutation = new GraphQLObjectType({
  	name: 'Mutation',
  	fields: {
		createProduct: {
			type: require('../types/ProductType'),
			args: {
				name: { type: GraphQLString },
				price: { type: GraphQLFloat },
			},
			resolve: (parentValue, args, req, info) => {
				/*
					Here in a normal program,
					Ill take the req argument ( where your creds should be stored )
					and check to make sure the user is authed
					and if not, i will return null ( if its behind an authed service )
					instead of the function below
				*/
				return productAPI.createProduct(args);
      		}
		}
  	}
});

module.exports = mutation;