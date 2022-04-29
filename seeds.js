const   mongoose    =   require('mongoose'),
        Song        =   require('./models/song'),
        Artist      =   require('./models/artist'),
        Album      =   require('./models/album'),
        User      =   require('./models/user');

const albumdatabase = [
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://www.joox.co.za/wp-content/uploads/2019/04/1000x1000-playlist-and-facebook.jpg",
        name:"FOREVER"
    },
    {   
        artistcode:"1",
        albumcode:"1",
        image:"https://i.scdn.co/image/ab67616d0000b2734749d18ed005d880c6dc5001",
        name:"Meet The Vamps"
    }
]

const songdatabase = [
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://i1.sndcdn.com/artworks-000115982448-puqai6-t500x500.jpg",
        name:"The Nights",
        lyric: `Once upon a younger year
        When all our shadows disappeared
        The animals inside came out to play
        Went face to face with all our fears
        Learned our lessons through the tears
        Made memories we knew would never fade
        
        One day my father—he told me
        "Son, don't let it slip away"
        He took me in his arms, I heard him say
        
        "When you get older
        Your wild heart will live for younger days
        Think of me if ever you're afraid"
        
        He said, "One day you'll leave this world behind
        So, live a life you will remember"
        My father told me when I was just a child
        "These are the nights that never die"
        My father told me
        
        "When thunder clouds start pouring down
        Light a fire they can't put out
        Carve your name into those shining stars"
        He said, "Go venture far beyond the shores
        Don't forsake this life of yours
        I'll guide you home no matter where you are"
        
        One day my father—he told me
        "Son, don't let it slip away"
        When I was just a kid I heard him say
        
        "When you get older
        Your wild heart will live for younger days
        Think of me if ever you're afraid"
        
        He said, "One day you'll leave this world behind
        So, live a life you will remember"
        My father told me when I was just a child
        "These are the nights that never die"
        My father told me
        
        "These are the nights that never die"
        My father told me
        My father told me`,
        favourite:"2"
    },
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://e.snmc.io/i/1200/s/e1a5d40f47c62336ab084a0282f6a040/4006014",
        name:"Level",
        lyric:`Oh oh sometimes, I get a good feeling
        Yeah
        Get a feeling that I never never never never had before, no no
        I get a good feeling, yeah
        Oh oh sometimes, I get a good feeling
        Yeah
        Get a feeling that I never never never never had before
        I get a good feeling, yeah`,
        favourite:"13"
    },
    {   
        artistcode:"0",
        albumcode:"0",
        image:"https://cdn.albumoftheyear.org/album/229595-waiting-for-love.jpg",
        name:"Waiting For Love",
        lyric:`Where there's a will, there's a way, kind of beautiful
        And every night has its day, so magical
        And if there's love in this life, there's no obstacle
        That can't be defeated
        
        For every tyrant a tear for the vulnerable
        In every lost soul the bones of a miracle
        For every dreamer a dream we're unstoppable
        With something to believe in
        
        Monday left me broken
        Tuesday I was through with hoping
        Wednesday my empty arms were open
        Thursday waiting for love, waiting for love
        Thank the stars it's Friday
        I'm burning like a fire gone wild on Saturday
        Guess I won't be coming to church on Sunday
        I'll be waiting for love, waiting for love
        To come around
        
        We are one of a kind irreplaceable
        How did I get so blind and so cynical
        If there's love in this life we're unstoppable
        No, we can't be defeated
        
        Monday left me broken
        Tuesday I was through with hoping
        Wednesday my empty arms were open
        Thursday waiting for love, waiting for love
        Thank the stars it's Friday
        I'm burning like a fire gone wild on Saturday
        Guess I won't be coming to church on Sunday
        I'll be waiting for love, waiting for love
        To come around`,
        favourite:"9"
    },
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://i1.sndcdn.com/artworks-000061064702-tv520w-t500x500.jpg",
        name:"Wake Me Up",
        lyric:`Feeling my way through the darkness
        Guided by a beating heart
        I can't tell where the journey will end
        But I know where to start
        
        They tell me I'm too young to understand
        They say I'm caught up in a dream
        Well life will pass me by if I don't open up my eyes
        Well that's fine by me
        
        [2x]
        So wake me up when it's all over
        When I'm wiser and I'm older
        All this time I was finding myself
        And I didn't know I was lost
        
        I tried carrying the weight of the world
        But I only have two hands
        Hope I get the chance to travel the world
        But I don't have any plans
        
        Wish that I could stay forever this young
        Not afraid to close my eyes
        Life's a game made for everyone
        And love is the prize
        
        [2x]
        So wake me up when it's all over
        When I'm wiser and I'm older
        All this time I was finding myself
        And I didn't know I was lost
        
        Didn't know I was lost
        I didn't know I was lost
        I didn't know I was lost
        I didn't know (didn't know, didn't know)`,
        favourite:"5"
    },
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://i1.sndcdn.com/artworks-ZECkxYMI1izCVSsa-e3gh4A-t500x500.jpg",
        name:"Addicted To You",
        lyric:`I don't know just how it happened,
        I let down my guard...
        Swore I'd never fall in love again
        But I fell hard.
        
        Guess I should have seen it coming,
        Caught me by surprise...
        I wasn't looking where I was going,
        I fell into your eyes.
        
        You came into my crazy world like a cool and cleansing wave.
        Before I, I knew what hit me baby you were flowing through my veins...
        
        I'm addicted to you,
        Hooked on your love,
        Like a powerful drug
        I can't get enough of,
        Lost in your eyes,
        Drowning in blue
        Out of control,
        What can I do?
        I'm addicted to you!
        
        Midnight blows in through the window,
        Dances round the room...
        Got me hypnotized,
        I'm getting high on the perfume.
        
        I couldn't live without you now,
        Oh, I know I'd go insane,
        I wouldn't last one night alone baby,
        I couldn't stand the pain!
        
        I'm addicted to you!
        Hooked on your love,
        Like a powerful drug
        I can't get enough of,
        Lost in your eyes,
        Drowning in blue
        Out of control,
        What can I do?
        I'm addicted to you!`,
        favourite:"5"
    },
    {
        artistcode:"0",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a8/SilhouettesAvicii.jpg",
        name:"Silhouettes",
        lyric:`Press play, fast forward
        Nonstop, we have a beaten path before us
        It was all there, in plain sight
        Come on people, we have all seen the signs
        
        So we will never get back to
        To the old school
        To the old grounds, it's all about the newfound
        We are the newborn, the world knew all about us
        (We are the future and we're here to stay)
        
        We've come a long way since that day
        And we will never look back at the faded silhouette
        We've come a long way since that day
        And we will never look back, look back at the faded silhouette
        
        Straight ahead on the path we have before us
        Day by day, soon the change will come
        Don't you know we took a big step forward
        Just lead the way and we pull the trigger
        
        And we will never get back to
        To the old school
        To the old grounds, it's all about the newfound
        We are the newborn, the world knew all about us
        (We are the future and we're here to stay)
        
        We've come a long way since that day
        And we will never look back at the faded silhouette
        We've come a long way since that day (that day...)
        
        We've come a long way since that day
        And we will never look back, at the faded silhouette
        
        We've come a long way since that day
        And we will never look back, look back, at the faded silhouette`,
        favourite:"7"
    },
    {
        artistcode:"0",
        image:"https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzRkNGM0ODM3OGZlYTRiYzQvMTAwMC5qcGc=.jpg",
        name:"SOS",
        lyric:`Can you hear me, S.O.S.?
        Help me put my mind to rest
        Two times clean again, I'm actin' low
        A pound of weed and a bag of blow
        
        I can feel your love pulling me up from the underground
        And I don't need my drugs, we could be more than just part-time lovers
        I can feel your touch picking me up from the underground
        And I don't need my drugs, we could be more than just part-time lovers
        
        We could be more than just part-time lovers
        We could be more than just part-time lovers
        
        I get robbed of all my sleep
        As my thoughts begin to bleed
        I'd let go but I don't know how
        Yeah, I don't know how, but I need you now
        
        I can feel your love pulling me up from the underground
        And I don't need my drugs, we could be more than just part-time lovers
        I can feel your touch picking me up from the underground
        And I don't need my drugs, we could be more than just part-time lovers
        
        I can feel your touch picking me up from the underground
        And I don't need my drugs, we could be more than just part-time lovers
        
        (We could be) We could be more than just part-time lovers (Part-time lovers)
        (Yeah, more than, more than lovers)
        We could be more than just part-time lovers
        
        Can you hear me, S.O.S.?
        Help me put my mind to rest`,
        favourite:"14"
    },
    {
        artistcode:"0",
        image:"https://i1.sndcdn.com/artworks-JBKgmTXjijZBg6Wq-L0zVmw-t500x500.jpg",
        name:"Superlove",
        lyric:`I want you
        All of you
        Can we break through?
        And start anew?
        
        I want your superlove
        I wanna be inside your superlove
        I need the spirit with the sexual
        I wanna be inside your superlove
        
        We both know
        The way to go
        Let's take a chance
        It's our last dance`,
        favourite:"8"
    },
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://i1.sndcdn.com/artworks-000160794938-aefpbo-t500x500.jpg",
        name:"The Days",
        lyric:`Under the tree where the grass don't grow
        We made a promise to never get old
        You had a chance and you took it on me
        And I made a promise that I couldn't keep
        
        Heart ache, heart break
        All over town
        But something flipped like a switch when you came around
        And I'm in pieces, pick me up and put me together
        
        These are the days we've been waiting for
        On days like these who could ask for more?
        
        Keep them coming 'cause we're not done yet
        These are the days we won't regret
        These are the days we won't forget
        
        These are the days we've been waiting for
        Rattle the cage and slam that door
        
        And the world is calling us but not just yet
        These are the days we won't regret
        These are the days we won't forget
        
        Out on the midnight the wild ones howl
        The last of the lost boys have thrown in the towel
        We used to believe we were stars aligned
        You made a wish and I fell out of
        
        Time flew, cut through
        All over town
        You made me bleed when I look up and you're not around
        But I'm in pieces, pick me up and put me together
        
        These are the days we've been waiting for
        On days like these who could ask for more?
        
        Keep them coming 'cause we're not done yet
        These are the days we won't regret
        These are the days we won't forget
        
        These are the days we've been waiting for
        Neither of us knows what's in store
        
        You just roll your window down and place your bets
        These are the days we won't regret
        These are the days we'll never forget!
        
        And these are the days (these are the days)
        And these are the days (these are the days)`,
        favourite:"1"
    },
    {
        artistcode:"0",
        albumcode:"0",
        image:"https://i1.sndcdn.com/artworks-000241405982-5484oo-t500x500.jpg",
        name:"Without You",
        lyric:`You said that we would always be
        Without you I feel lost at sea
        Through the darkness you'd hide with me
        Like the wind we'd be wild and free
        
        You said you'd follow me anywhere
        But your eyes tell me you won't be there
        
        I've gotta learn how to love without you
        I've gotta carry my cross without you
        Stuck in the middle and I'm just about to
        Figure it out without you
        And I'm done sitting home without you
        Fuck, I'm going out without you
        I'm gonna tear this city down without you
        I'm goin' Bonnie and Clyde without you
        
        Now I'm running away, my dear
        From myself and the truth I fear
        My heart is beating I can't see clear
        How I'm wishing that you were here
        
        You said you'd follow me anywhere
        But your eyes tell me you won't be there
        
        I've gotta learn how to love without you
        I've gotta carry my cross without you
        Stuck in the middle and I'm just about to
        Figure it out without you
        And I'm done sitting home without you
        Fuck, I'm going out without you
        I'm gonna tear this city down without you
        I'm goin' Bonnie and Clyde without you`,
        favourite:"13"
    },
    {
        artistcode:"1",
        albumcode:"1",
        image:"https://m.media-amazon.com/images/M/MV5BMjZmZGY3MWUtMmZmOC00NjhmLTg2YzAtYjgxOTE5ZDY1MmI0XkEyXkFqcGdeQXVyNzA0Njc0MzI@._V1_.jpg",
        name:"Wild Heart",
        lyric:`I was walking away,
        But she's so beautiful it made me stay
        I don't know her name,
        But I'm hoping she might feel the same
        So here I go again,
        She got my heart again!
        
        Tonight we'll dance
        I'll be yours and you'll be mine
        We won't look back,
        Take my hand and we will shine
        Oh, oh, oh
        She needs a wild heart [2x]
        I got a wild heart
        
        Stay here, my dear,
        Feels like I've been standing right here for years
        My mind's beat up
        Tell me that you feel this, and I won't give up
        I won't give up
        
        Tonight we'll dance
        I'll be yours and you'll be mine
        We won't look back,
        Take my hand and we will shine
        Oh, oh, oh
        She needs a wild heart [2x]
        I got a wild heart
        Oh, oh, oh
        She needs a wild heart [2x]
        I got a wild heart
        
        And I know it's late, I know it's cold
        But come right here, I swear I'll never let you go
        The way you move—it's wonderful
        Let's do it now, 'cause one day we'll both be old
        Oh whoa oh
        
        Tonight we'll dance
        I'll be yours and you'll be mine
        We won't look back,
        Take my hand and we will shine
        Oh, oh, oh
        She needs a wild heart [2x]
        I got a wild heart
        
        Tonight we'll dance
        I'll be yours and you'll be mine
        We won't look back,
        Take my hand and we will shine
        Oh, oh, oh
        She needs a wild heart [2x]
        I got a wild heart
        Oh, oh, oh
        She needs a wild heart [2x]
        I've got a wild heart`,
        favourite:"17"
    },
    {
        artistcode:"1",
        albumcode:"1",
        image:"https://upload.wikimedia.org/wikipedia/en/c/c2/Last_Night_The_Vamps.jpg",
        name:"Last Night",
        lyric:`I hold my hands up high
        And throw my glass into the sky
        But when the morning comes
        We'll never see the sun
        
        And if the walls close in
        Then let's just start it all again
        That's when the evening comes
        Oh, yeah, the evening comes
        
        No we're not going home tonight
        Waiting up for the stars to shine
        And we'll do it, and we'll do it, and we'll do it again
        
        Wake up in the morning
        With the sunlight in my eyes
        No, my head don't feel so bright
        What the hell happened last night?
        
        Yeah, last night think we were dancing
        Singing all our favourite songs
        Think I might have kissed someone
        And if tomorrow never comes
        We had last night
        
        Let's shut this party down
        And pull the building to the ground
        Yeah, girl let's live it up
        One night is all we got
        
        Let's dance until we die
        Nobody's going home tonight
        This kiss could be our last
        Come on and raise your glass
        
        No we're not going home tonight
        Waiting up for the stars to shine
        And we'll do it, and we'll do it, and we'll do it again
        
        Wake up in the morning
        With the sunlight in my eyes
        No, my head don't feel so bright
        What the hell happened last night?
        
        Yeah, last night think we were dancing
        Singing all our favourite songs
        Think I might have kissed someone
        And if tomorrow never comes
        We had last night
        
        We do it all again
        We do it all again
        So bring your friends and tell a friend to bring another friend (we had last night)
        
        We do it all again
        We do it all again
        By the end of tonight
        We can all be friends (we had last night)
        
        We do it all again
        We do it all again
        So bring your friends and tell a friend to bring another friend (we had last night)
        
        We do it all again
        We do it all again
        By the end of the night
        
        Wake up in the morning
        With the sunlight in my eyes
        No, my head don't feel so bright
        What the hell happened last night?
        
        Yeah, last night think we were dancing
        Singing all our favourite songs
        Think I might have kissed someone
        And if tomorrow never comes
        We had last night
        
        Wake up in the morning
        With the sunlight in my eyes
        No, my head don't feel so bright
        What the hell happened last night?
        
        Yeah, last night think we were dancing
        Singing all our favourite songs
        Think I might have kissed someone
        And if tomorrow never comes
        We had last night`,
        favourite:"6"
    },
    {
        artistcode:"1",
        albumcode:"1",
        image:"https://www.bloggang.com/data/sandara/picture/1404883024.jpg",
        name:"Somebody To You",
        lyric:`Yeah you!
        Yeah you!
        
        I used to wanna be
        Living like there's only me
        But now I spend my time
        Thinking 'bout a way to get you off my mind
        (Yeah you!)
        I used to be so tough
        Never really gave enough
        And then you caught my eye
        Giving me the feeling of a lightning strike
        (Yeah you!)
        
        Look at me now, I'm falling
        I can't even talk, still stuttering
        This ground of mine keeps shaking
        Oh oh oh, now!
        
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        
        Everybody's tryna be a billionaire
        But every time I look at you I just don't care
        'Cause all I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        I used to ride around
        I didn't wanna settle down
        But now I wake each day
        Looking for a way that I can see your face
        (Yeah you!)
        I've got your photograph
        But baby I need more than that
        I need to know your lips
        Nothing ever mattered to me more than this
        (Yeah you!)
        
        Look at me now, I'm falling
        I can't even talk, still stuttering
        This ground of mine keeps shaking
        Oh oh oh, now!
        
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        
        Everybody's tryna be a billionaire
        But every time I look at you I just don't care
        'Cause all I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        Look at me now, I'm falling
        I can't even talk, still stuttering
        All I wanna be, yeah all I ever wanna be, yeah, yeah, yeah, yeah
        (Yeah you!)
        
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        All I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        Everybody's trying to be a billionaire
        But every time I look at you I just don't care
        'Cause all I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        'Cause all I wanna be, yeah all I ever wanna be, yeah, yeah
        Is somebody to you
        (Yeah you!)
        
        Yeah you!`,
        favourite:"3"
    },
    {
        artistcode:"1",
        albumcode:"1",
        image:"https://i1.sndcdn.com/artworks-000084869646-lc2gdk-t500x500.jpg",
        name:"Can we dance",
        lyric:`I talk a lot of (shh) when I'm drinking, baby,
        I'm known to go a little too fast.
        Don't mind all my friends, I know they're all crazy,
        But they're the only friends that I have.
        I know I don't know you,
        But I'd like to skip the small talk and romance, girl.
        That's all I have to say so, baby, can we dance?
        
        Here we go again, another drink I'm caving in,
        And stupid words keep falling from my mouth.
        You know that I mean well,
        My hands were meant for somewhere else.
        Your eyes are doing naughty butterflies
        
        Oh, oh, one more drink and I should go,
        Oh, oh, but maybe she might like me though.
        Oh, oh, I just can't think of what to say,
        Should I go, should I stay?
        Just can't let her slip away.
        
        I talk a lot of (shh) when I'm drinking, baby,
        I'm known to go a little too fast.
        Don't mind all my friends, I know they're all crazy,
        But they're the only friends that I have.
        I know I don't know you,
        But I'd like to skip the small talk and romance, girl.
        That's all I have to say so, baby, can we dance?
        
        I was nearly in, but then came the pushy friend,
        Killed the vibe and took my perfect ten away.
        You know I need you, girl,
        My heart's not made for someone else.
        So save me here 'cause I can barely stand.
        
        Oh, oh, one more drink and I should go,
        Oh, oh, but maybe she might like me though.
        Oh, oh, I can't take this any more,
        Should I stay? Should I go?
        It just can lead back to her door.
        
        I talk a lot of (shh) when I'm drinking, baby,
        I'm known to go a little too fast.
        Don't mind all my friends, I know they're all crazy,
        But they're the only friends that I have.
        I know I don't know you,
        But I'd like to skip the small talk and romance, girl.
        That's all I have to say so, baby, can we dance?
        
        I've been a bad, bad boy
        Whispering rude things in her ear,
        Please say she'll break,
        Please say she'll change
        Her mind and bring me back to her place.
        
        I talk a lot of (shh) when I'm drinking, baby,
        I'm known to go a little too fast.
        Don't mind all my friends, I know they're all crazy,
        But they're the only friends that I have.
        I know I don't know you,
        But I'd like to skip the small talk and romance, girl.
        That's all I have to say so, baby, can we dance?
        
        I talk a lot of (shh) when I'm drinking, baby,
        I'm known to go a little too fast (a little too fast)
        Don't mind all my friends, I know they're all crazy,
        But they're the only friends that I have.
        I know I don't know you,
        But I'd like to skip the small talk and romance, girl.
        That's all I have to say so, baby, can we dance?`,
        favourite:"14"
    }
]
const artistdatabase = [
    {
        artistcode:"0",
        image:"https://yt3.ggpht.com/ytc/AKedOLSI9_dd62tSvcWFkeMchXHW6Ba8-xhN7mDpv3FU-A=s900-c-k-c0x00ffffff-no-rj",
        name:"AVICII"
    },
    {
        artistcode:"1",
        image:"https://lastfm.freetls.fastly.net/i/u/770x0/1a9350dcb3cdb52342d4a6547eb2689f.jpg",
        name:"The Vamps"
    }
]

function artisttosong(artistcode, artistname) {
    Song.find({'artistcode': artistcode.toString()},function(err, code){
        if(err){
            console.log(err);
        } else {
            code.forEach(element => {
                Artist.findOne({'name': artistname.toString()},function(err, artistname){
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
function albumtosong(albumcode, albumname) {
    Song.find({'albumcode': albumcode.toString()},function(err, code){
        if(err){
            console.log(err);
        } else {
            code.forEach(element => {
                Album.findOne({'name': albumname.toString()},function(err, albumname){
                    if(err){
                        console.log(err);
                    } else {
                        element.album.id = albumname._id;
                        element.album.image = albumname.image;
                        element.album.name = albumname.name;
                        element.save();
                    }
                })
            });
        }
    });
}
function artisttoalbum(albumcode, artistname) {
    Album.find({'albumcode': albumcode.toString()},function(err, code){
        if(err){
            console.log(err);
        } else {
            code.forEach(element => {
            Artist.findOne({'name': artistname.toString()},function(err, name){
                if(err){
                    console.log(err);
                } else {
                    element.artist.id = name._id;
                    element.artist.image = name.image;
                    element.artist.name = name.name;
                    element.save();
                 }
                })
            });
        }
    });
}
function seedDB(){
    // User.remove({},function(err){
    //     if(err){
    //         console.log(err);
    //     }
    // });
    Artist.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
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
            songdatabase.forEach(function(seed){
                Song.create(seed, function(err, song){
                    if(err){
                        console.log(err);
                    } else {
                        artisttosong('0','AVICII'); 
                        artisttosong('1','The Vamps');         
                    }
                });
            });
        }
    });

    Album.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            albumdatabase.forEach(function(seed){
                Album.create(seed, function(err, album){
                    if(err){
                      console.log(err);
                    } else {
                        artisttoalbum('0','AVICII');
                        artisttoalbum('1','The Vamps');
                        albumtosong('0','FOREVER');
                        albumtosong('1','Meet The Vamps');
                    }
                });
            });
        }
    });
}

module.exports = seedDB;