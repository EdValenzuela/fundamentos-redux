import React from 'react'
import { connect } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { fetchPosts } from '../redux/actions/postsActions'

const Blog = (props) => {
    console.log(props)

    const handlerClick = () =>{
        props.dispatch(fetchPosts());
    }

    return (
        <div>
            <h1>Nuevas entradas de blog</h1>
            <button onClick={handlerClick}>
                Cargar Posts
            </button>
            {
                props.blog.isFetching ? (
                    <SyncLoader />
                ): (
                    <ul>
                        {
                            props.blog.posts.map( item => (
                                <li key={item.id}>{ item.title }</li>
                            ) )
                        }
                    </ul>
                )
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Blog)
