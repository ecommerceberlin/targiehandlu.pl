 

export default function Custom404() {
  return null
}


export async function getServerSideProps() {
    return {
      redirect: {
        destination: 'https://ecommercewarsaw.com',
        permanent: false,
      }
    }
}