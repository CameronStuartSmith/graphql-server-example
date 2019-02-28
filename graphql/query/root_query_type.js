const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
} = graphql;
const productAPI = require('../services/product');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
	// You can pass as many things here as you would like
	// This corresponds to your query in graphql
	/*
		So this query could be
		product(id: "1") {
			id
			price
		}
		or
		products {
			id
			name
			price
		}
	*/	
    product: {
	  type: require('../types/ProductType'),
	  args: {
		id: { type: new GraphQLNonNull(GraphQLString)}
	  },
	  // Some people call the 4th arg ast and some info
      resolve(parent, args, req, info) {
        return productAPI.getProductById(args.id, info);
      }
	},
	products: {
		type: new GraphQLList(require('../types/ProductType')),
		resolve(parent, args, req, info) {
			return productAPI.getProducts(info);
		}
	}
  }
});

module.exports = RootQueryType;