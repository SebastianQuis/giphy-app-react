const api_key = 'drMsi6w7DcbBdMhn1URZPZXZy9m2aAQb';


export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`;
  const res = await fetch( url );    
  const { data } = await res.json();

  const giphys = data.map( giphy => ({
      id: giphy.id,
      title: giphy.title,
      imgUrl: giphy.images.downsized_medium.url
    })
  );

  // setGiphy( giphys );
  // console.log(giphys);
  return giphys;
}
