const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
} = graphql;

const tax = 0.06;

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  // Description isn't required but helpful in graphqli
  description: 'Product that a store sells',
  fields: {
    id: { type: GraphQLID },
	name: { type: GraphQLString },
	/*
		here is an example of how you can pass something other than
		the direct property value of the object you pass in
		the source object is almost identital to the req object of a query
		so you could check for user auth for certain properties if you wanted too

		note: if you using projections, you can only access properties that the user has requested
		so lets say you have a currency type property, if they didn't request it, then
		you couldn't use it below as lets say parent.currencyType
		only parent.price would be guarenteed
	*/
	price: {
		type: GraphQLFloat,
		resolve: (parent, args, source, ast) => {
			return parent.price * ( 1 + tax);
		}
	},
  }
});

module.exports = ProductType;