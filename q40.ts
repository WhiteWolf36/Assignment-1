function make_album(artist: string, title: string, tracks?: number): object {
    let album: any = {
      artist: artist,
      title: title
    };

    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
 
  let obj1 = make_album('Young Stunners', 'Open Letter');
  let obj2 = make_album('Drake', 'Pop', 12);
  let obj3 = make_album('Atif Aslam', 'Beintiha', 5);
 
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);