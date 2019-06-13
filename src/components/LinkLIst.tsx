import React, { Component } from 'react'
import Link from './Link'
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

export default class LinkList extends Component<any> {
  render() {

    return (
      <Query query={FEED_QUERY}>
        { ({ loading, error, data}:any) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data.feed.links;
          
          return(
            <div>
              {linksToRender.map((link: any):any => <Link key={link.id} link={link} />)}
            </div>
          )
        } }
      </Query>
    )
  }
}
