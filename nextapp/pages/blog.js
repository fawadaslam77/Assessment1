function Blog({ posts }) {
    // Render posts...
  }
  
  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3100/blogs')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Blog