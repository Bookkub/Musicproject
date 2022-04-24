const   mongoose    =   require('mongoose'),
        Song        =   require('./models/song'),
        Artist      =   require('./models/artist'),
        Album      =   require('./models/album');

function setartist(artistid, artistcode) {
    Song.find({'code': artistid.toString()},function(err, code){
        if(err){
            console.log(err);
        } else {
            code.forEach(element => {
                Artist.findOne({'name': artistcode.toString()},function(err, artistname){
                    if(err){
                        console.log(err);
                    } else {
                        element.artist.id = artistname._id;
                        element.artist.image = artistname.image;
                        element.artist.name = artistname.name;
                        element.save();
                    }
                })
            });
        }
    });
}
const albumdatabase = [
    {
        image:"https://www.joox.co.za/wp-content/uploads/2019/04/1000x1000-playlist-and-facebook.jpg",
        name:"FOREVER"
    },
    {
        image:"https://i.scdn.co/image/ab67616d0000b2734749d18ed005d880c6dc5001",
        name:"Meet The Vamps"
    }
]

const songdatabase = [
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-000115982448-puqai6-t500x500.jpg",
        name:"The Nights",
        favourite:"2"
    },
    {
        code:"0",
        image:"https://e.snmc.io/i/1200/s/e1a5d40f47c62336ab084a0282f6a040/4006014",
        name:"Level",
        favourite:"13"
    },
    {   
        code:"0",
        image:"https://cdn.albumoftheyear.org/album/229595-waiting-for-love.jpg",
        name:"Waiting For Love",
        favourite:"9"
    },
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-000061064702-tv520w-t500x500.jpg",
        name:"Wake Me Up",
        favourite:"5"
    },
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-ZECkxYMI1izCVSsa-e3gh4A-t500x500.jpg",
        name:"Addicted To You",
        favourite:"5"
    },
    {
        code:"0",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a8/SilhouettesAvicii.jpg",
        name:"Silhouettes",
        favourite:"7"
    },
    {
        code:"0",
        image:"https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzRkNGM0ODM3OGZlYTRiYzQvMTAwMC5qcGc=.jpg",
        name:"SOS",
        favourite:"14"
    },
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-JBKgmTXjijZBg6Wq-L0zVmw-t500x500.jpg",
        name:"Superlove",
        favourite:"8"
    },
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-000160794938-aefpbo-t500x500.jpg",
        name:"The Days",
        favourite:"1"
    },
    {
        code:"0",
        image:"https://i1.sndcdn.com/artworks-000241405982-5484oo-t500x500.jpg",
        name:"Without You",
        favourite:"13"
    },
    {
        code:"1",
        image:"https://m.media-amazon.com/images/M/MV5BMjZmZGY3MWUtMmZmOC00NjhmLTg2YzAtYjgxOTE5ZDY1MmI0XkEyXkFqcGdeQXVyNzA0Njc0MzI@._V1_.jpg",
        name:"Wild Heart",
        favourite:"17"
    },
    {
        code:"1",
        image:"https://upload.wikimedia.org/wikipedia/en/c/c2/Last_Night_The_Vamps.jpg",
        name:"Last Night",
        favourite:"6"
    },
    {
        code:"1",
        image:"https://www.bloggang.com/data/sandara/picture/1404883024.jpg",
        name:"Somebody To You",
        favourite:"3"
    },
    {
        code:"1",
        image:"https://i1.sndcdn.com/artworks-000084869646-lc2gdk-t500x500.jpg",
        name:"Can we dance",
        favourite:"14"
    }
]
const artistdatabase = [
    {
        code:"0",
        image:"https://yt3.ggpht.com/ytc/AKedOLSI9_dd62tSvcWFkeMchXHW6Ba8-xhN7mDpv3FU-A=s900-c-k-c0x00ffffff-no-rj",
        name:"AVICII"
    },
    {
        code:"1",
        image:"https://yt3.ggpht.com/ytc/AKedOLQmCE1BeSgcF09NdHOLZ77zhooMNGqtms6CmXTgDw=s900-c-k-c0x00ffffff-no-rj",
        name:"The Vamps"
    }
]

function seedDB(){
    Artist.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Artist removal complete');
            artistdatabase.forEach(function(artistseed){
                Artist.create(artistseed, function(err, artist){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Artist data added!');   
                    }
                });
            });
        }
    })

    Song.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Song removal complete');
            songdatabase.forEach(function(seed){
                Song.create(seed, function(err, song){
                    if(err){
                        console.log(err);
                    } else {
                        setartist('0','AVICII'); 
                        setartist('1','The Vamps');         
                    }
                });
            });
        }
    });
    Album.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Album removal complete');
            albumdatabase.forEach(function(seed){
                Album.create(seed, function(err, album){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Album data added!'); 
                    }
                })
            })
        }
    });
}

module.exports = seedDB;