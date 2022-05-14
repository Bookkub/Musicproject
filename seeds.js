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
    },
    {
        artistcode:"2",
        albumcode:"2",
        image:"https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2VjODQzYTQ5NjBjZWE1ODAvMTAwMC5qcGc=.jpg",
        name:"These Two Windows"
    },
    {
        artistcode:"3",
        albumcode:"3",
        image:"https://upload.wikimedia.org/wikipedia/en/9/96/One_direction_up_all_night_albumcover.jpg",
        name:"Up All Night"
    },
    {
        artistcode:"0",
        albumcode:"4",
        image:"https://s.isanook.com/jo/0/rp/r/w300/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzFmNDk3OTBjOTBhN2Y3ODgvNjQwLmpwZw==.jpg",
        name:"TRUE"
    },
    {
        artistcode:"4",
        albumcode:"5",
        image:"https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2ZjMzMyM2EzMGJiNWY0OWEvMTAwMC5qcGc=.jpg",
        name:"Perspective"
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
        source:"/songfile/The nights.mp3",
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
        source:"/songfile/Level.mp3",
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
        source:"/songfile/Waiting for love.mp3",
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
        source:"/songfile/Wake me up.mp3",
        favourite:"5"
    },
    {
        artistcode:"0",
        albumcode:"4",
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
        source:"/songfile/Addicted to you.mp3",
        favourite:"5"
    },
    {
        artistcode:"0",
        albumcode:"4",
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
        source:"/songfile/Silhouettes.mp3",
        favourite:"7"
    },
    {
        artistcode:"0",
        albumcode:"4",
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
        source:"/songfile/SOS.mp3",
        favourite:"14"
    },
    {
        artistcode:"0",
        albumcode:"4",
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
        source:"/songfile/Superlove.mp3",
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
        source:"/songfile/The days.mp3",
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
        source:"/songfile/Without you.mp3",
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
        source:"/songfile/Wild heart.mp3",
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
        source:"/songfile/Last night.mp3",
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
        source:"/songfile/Somebody to you.mp3",
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
        source:"/songfile/Can we dance.mp3",
        favourite:"14"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"Mind Is A Prison",
        image:"https://i1.sndcdn.com/artworks-000650792818-n4jktb-t500x500.jpg",
        lyric:`I don't live in California, I'll inform you, that's not where I reside
        I'm just a tenant, paying rent inside this body and I
        Got two windows and those windows, well I'll call them my eyes
        I'm just going where the wind blows, I don't get to decide
        
        Sometimes I think too much, yeah, I get so caught up
        I'm always stuck in my head
        I wish I could escape, I tried to yesterday
        Took all the sheets off my bed
        
        Then I tied up my linen with five strips of ribbon I found
        Scaled the side of the building
        I ran to the hills till they found me
        And they put me back in my cell
        All by myself, alone with my thoughts again
        Guess my mind is a prison and I'm never gonna get out
        
        So they tranquilized me, analyzed me, threw me back in my cage
        Then they tied me to an IV, told me I was insane
        I'm a prisoner, a visitor inside of my brain
        And no matter what I do, they try to keep me in chains
        
        Sometimes I think too much, yeah, I get so caught up
        I'm always stuck in my head
        I wish I could escape, I tried to yesterday
        Took all the sheets off my bed
        
        Then I tied up my linen with five strips of ribbon I found
        Scaled the side of the building
        I ran to the hills till they found me
        And they put me back in my cell
        All by myself, alone with my thoughts again
        Guess my mind is a prison and I'm never gonna get out
        
        Said even if it's true, no matter what I do
        I'm never gonna escape
        I won't give up on hope, secure another rope
        And try for another day
        Said even if it's true, no matter what I do
        I'm never gonna escape
        I won't give up on hope, secure another rope
        And try for another day
        
        Then I tied up my linen with five strips of ribbon I found
        Scaled the side of the building
        I ran to the hills till they found me
        And they put me back in my cell
        All by myself, alone with my thoughts again
        Guess my mind is a prison and I'm never gonna get out`,
        source:"/songfile/Mind is a prison.mp3",
        favourite:"22"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"Demons",
        image:"https://media.thehypemagazine.com/wp-content/uploads/2020/01/Alec-Benjamin.jpg",
        lyric:`I've got all these demons hiding underneath
        Nobody can see them, nobody but me, and you're the reason
        The only thing that keeps me from diving off the deep end
        Because I've got all these demons, demons, demons, hmm-hmm
        
        Well, at first I thought I'd have to bear this weight by myself
        But when my knees were getting weak and I was in need of help
        You were there to take away the pain that I felt, hmm
        You're the only one that gave me hope
        You're the only one who really knows
        
        I've got all these demons hiding underneath
        Nobody can see them, nobody but me, and you're the reason
        The only thing that keeps me from diving off the deep end
        Because I've got all these demons, demons, demons, hmm-hmm
        
        For a moment I thought maybe I was doing alright
        So I took your love for granted and I left you behind
        And I just didn't understand, you kept me alive, hmm
        You forgave me and you gave me hope
        Still you're the only one who really knows
        
        I've got all these demons hiding underneath
        Nobody can see them, nobody but me, and you're the reason
        The only thing that keeps me from diving off the deep end
        Because I've got all these demons, demons, demons, hmm-hmm
        
        It's you, you pull me through it on the days when I have doubts
        Even when I turn my back on you, you never let me down
        And even when I hit the bottom, no, you didn't let me drown
        No, oh
        
        I've got all these demons hiding underneath
        Nobody can see them, nobody but me, and you're the reason
        The only thing that keeps me from diving off the deep end
        Because I've got all these demons, demons, demons, hmm-hmm
        Because I've got all these demons, demons, demons, hmm-hmm`,
        source:"/songfile/Demons.mp3",
        favourite:"10"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"Oh My God",
        image:"https://www.educatepark.com/wp-content/uploads/2020/02/omg.jpg",
        lyric:`Looking at the pictures I keep on my shelf
        'Cause it's been so long since I've looked like myself
        Burn another candle down
        Burn another candle down
        Running low on patience, running low on fumes
        I'm never gonna make it halfway to the moon
        But it's too late to turn around
        But it's too late to turn around
        
        I'm running out of oxygen
        I'll never be the same again now
        Same again now
        
        Oh my god, I can't remember
        Who I was just last December
        What have I done, how did I get here?
        What have I done?
        Oh my god, look in the mirror
        I was young, nothing to fear once
        What have I done, how did I get here?
        What have I done?
        
        Maybe I was foolish, I guess I was naive
        I didn't know what I had, and I thought I had to leave
        I wish that I was homeward bound
        I wish that I was homeward bound
        I'm searching for a signal, holding out my phone
        Have I gone too far, am I on my own?
        No one here to hold me now
        No one here to hold me now
        
        I'm running out of oxygen
        Can't help but wish I'd stayed
        I'm lost just like Will Robinson
        Or rocket man in space
        
        Oh my god, I can't remember
        Who I was just last December
        What have I done, how did I get here?
        What have I done?
        Oh my god, look in the mirror
        I was young, nothing to fear once
        What have I done, how did I get here?
        What have I done?
        Mmm, mmm
        Mmm, mmm
        
        Oh my god, I can't remember
        Who I was just last December
        Who I was just last December
        Oh my god
        
        Oh my god, look in the mirror
        I was young, nothing to fear once
        What have I done, how did I get here?
        What have I done?
        Mmm, mmm
        Mmm, mmm`,
        source:"/songfile/Oh my god.mp3",
        favourite:"16"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"The Book of You & I",
        image:"https://image.joox.com/JOOXcover/0/cc30d33befb801c3/300",
        lyric:`Well, it all began in the back of her car
        I was just 16 but I fell so hard
        Well, the years went by and she held my heart
        But her love ran dry and we fell apart
        
        I felt her growing distant
        I knew her love was shifting
        And all that I could say was
        
        Don't tell me that it's over
        The book of you and I
        Now you've scribbled out my name
        And you've erased my favorite lines
        There were so many chapters that we never got to write
        Like cereal for dinner
        And staying up all night
        
        I remember where we started
        I remember how you looked but now
        I'm missing bits and pieces from the pages that you took
        You didn't give a reason, I'll forever wonder why
        We never got to finish the book of you and I
        
        Well, I bought a pen and I turned the page
        Then I wrote about how I wish you'd stayed
        I said all the things that I never got to say
        Maybe when it's done I will feel okay
        
        That she had grown so distant
        I knew her love had shifted
        I wish she felt the same
        
        Don't tell me that it's over
        The book of you and I
        Now you've scribbled out my name
        And you've erased my favorite lines
        There were so many chapters that we never got to write
        Like cereal for dinner
        And staying up all night
        
        I remember where we started
        I remember how you looked but now
        I'm missing bits and pieces from the pages that you took
        You never gave a reason, I'll forever wonder why
        We never got to finish the book of you and I
        
        Don't tell me
        Tell me that you're leaving me
        My belly hurts and my heart is hardly beating right
        I hate to beg but I'll try one last time
        
        Don't tell me that it's over
        The book of you and I
        Now you've scribbled out my name
        And you've erased my favorite lines
        There were so many chapters that we never got to write
        Like cereal for dinner
        And staying up all night
        
        I remember where we started
        I remember how you looked but now
        I'm missing bits and pieces from the pages that you took
        You never gave a reason, I'll forever wonder why
        We never got to finish the book of you and I`,
        source:"/songfile/The book of you & i.mp3",
        favourite:"14"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"Match In The Rain",
        image:"https://i1.sndcdn.com/artworks-67BU4OHp6e6yvfgt-GtsXCQ-t500x500.jpg",
        lyric:`Seems you've been changing lately
        I can feel the distance in your touch
        There's two people in this hallway
        But there's only one of us
        That's tryna keep this fire going
        Should I just give up?
        I sense trouble on the horizon
        I'm afraid our time is up
        
        The clouds are rolling in, I feel you drifting away
        And though my intuition tells me that it's too late
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain
        I still want to make you love me, make you love me again
        Even though my intuition tells me that it's the end
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain
        
        Yeah, I can taste it, it's the end
        This love's impossible to save
        Though you embrace it, I can't face it
        So I look the other way
        There's trouble in your eyes
        But I pretend that we're okay
        I wish that we could compromise
        But there's just nothing left to say
        
        The clouds are rolling in, I feel you drifting away
        And though my intuition tells me that it's too late
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain
        I still want to make you love me, make you love me again
        Even though my intuition tells me that it's the end
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain
        
        Trying to light a match in the rain
        Like flying a kite in a hurricane
        Like riding a bike with no air or chain
        On a broken road, it's a losing game
        Trying to light a match in the rain
        Like flying a kite in a hurricane
        Like riding a bike with no air or chain
        On a broken road, it's a losing game
        
        The clouds are rolling in, I feel you drifting away
        And though my intuition tells me that it's too late
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain
        I still want to make you love me, make you love me again
        Even though my intuition tells me that it's the end
        That in these conditions tryna bring back the flame is like
        Tryna light a match in the rain`,
        source:"/songfile/Match in a rain.mp3",
        favourite:"7"
    },
    {
        artistcode:"2",
        albumcode:"2",
        name:"Jesus In LA",
        image:"https://i.ytimg.com/vi/5_EXWS7UNs4/maxresdefault.jpg",
        lyric:`Well, I shook hands with the devil
        Down on the south side
        And he bought us both a drink
        With a pad and a pencil sat by his side
        I said, "Tell me what you think"
        
        I've been looking for my savior, looking for my truth
        I even asked my shrink
        He brought me down to his level
        Said, "Son, you're not special
        You won't find him where you think"
        
        You won't find him down on Sunset
        Or at a party in the hills
        At the bottom of the bottle
        Or when you're tripping on some pills
        When they sold you the dream you were just 16
        Packed a bag and ran away
        And it's a crying shame you came all this way
        'Cause you won't find Jesus in LA
        And it's a crying shame you came all this way
        'Cause you won't find Jesus in LA
        
        Took a sip of his whiskey
        Said, "Now that you're with me
        Well, I think that you should stay"
        Yeah, I know you've been busy
        Searching through the city
        So let me share the way
        
        I know I'm not your savior
        Know I'm not your truth
        But I think we could be friends
        He said "Come down to my level
        Hang out with the devil
        Let me tell you, in the end...
        
        You won't find him down on sunset
        Or at a party in the hills
        At the bottom of the bottle
        Or when you're tripping on some pills
        When they sold you the dream you were just 16
        Packed a bag and ran away
        And it's a crying shame you came all this way
        'Cause you won't find Jesus in LA
        And it's a crying shame you came all this way
        'Cause you won't find Jesus in LA"
        
        And that is when I knew that it was time to go home
        And that is when I realized that I was alone
        And all the vibrant colors from the lights fade away
        And I don't care what they say
        
        You won't find him down on sunset
        Or at a party in the hills
        At the bottom of the bottle
        Or when you're tripping on some pills
        When they sold you the dream you were just 16
        Packed a bag and ran away
        And it's a crying shame you came all this way
        'Cause you won't find Jesus in LA
        I won't find him down on sunset
        Or at a party in the hills
        At the bottom of the bottle
        Or when I'm tripping on some pills
        When they sold me the dream I was just 16
        Packed my bag and ran away
        And it's a crying shame I came all this way
        'Cause I won't find Jesus in LA
        And it's a crying shame I came all this way
        'Cause I won't find Jesus in LA`,
        source:"/songfile/Jesus in la.mp3",
        favourite:"6"
    },
    {
        artistcode:"3",
        albumcode:"3",
        name:"What Makes You Beautiful",
        image:"https://media.teroradio.com/pix/single/4979.jpg",
        lyric:`[Liam:]
        You're insecure
        Don't know what for
        You're turning heads when you walk through the door
        Don't need make-up
        To cover up
        Being the way that you are is enough
        
        [Harry:]
        Everyone else in the room can see it
        Everyone else but you
        
        [All:]
        Baby you light up my world like nobody else
        The way that you flip your hair gets me overwhelmed
        But when you smile at the ground it ain't hard to tell
        You don't know
        Oh, oh
        You don't know you're beautiful
        If only you saw what I can see
        You'd understand why I want you so desperately
        Right now I'm looking at you and I can't believe
        You don't know
        Oh, oh
        You don't know you're beautiful
        Oh, oh
        That's what makes you beautiful
        
        [Zayn:]
        So c-come on
        You got it wrong
        To prove I'm right
        I put it in a song
        I don't know why
        You're being shy
        And turn away when I look into your eye-eye-eyes
        
        [Harry]
        Everyone else in the room can see it
        Everyone else but you
        
        [All:]
        Baby you light up my world like nobody else
        The way that you flip your hair gets me overwhelmed
        But when you smile at the ground it ain't hard to tell
        You don't know
        Oh oh
        You don't know you're beautiful
        If only you saw what I can see
        You'll understand why I want you so desperately
        Right now I'm looking at you and I can't believe
        You don't know
        Oh oh
        You don't know you're beautiful
        Oh oh
        
        [Harry:]
        That's what makes you beautiful
        
        Nana nana nana nana
        Nana nana nana nana
        Nana nana nana nana
        
        [Harry:]
        Baby you light up my world like nobody else
        The way that you flip your hair gets me overwhelmed
        But when you smile at the ground it ain't hard to tell
        
        [All:]
        You don't know
        Oh oh
        You don't know you're beautiful
        
        Baby, you light up my world like nobody else
        The way that you flip your hair gets me overwhelmed
        But when you smile at the ground it ain't hard to tell
        You don't know
        Oh oh
        You don't know you're beautiful (Oh)
        If only you saw what I can see
        You'll understand why I want you so desperately
        ([Harry:] desperately)
        Right now I'm looking at you and I can't believe
        You don't know
        Oh oh
        You don't know you're beautiful
        Oh oh
        You don't know you're beautiful
        Oh oh
        
        [Harry:]
        That's what makes you beautiful`,
        source:"/songfile/What make you beautiful.mp3",
        favourite:"22"
    },
    {
        artistcode:"3",
        albumcode:"3",
        name:"One Thing",
        image:"http://4.bp.blogspot.com/-LXFz7FxoElY/Tu_S4d8WfnI/AAAAAAAABAU/GqAYy4tdYus/s1600/oned.jpg",
        lyric:`[Liam:]
        I've tried playing it cool
        But when I'm looking at you
        I can't ever be brave
        'Cause you make my heart race
        
        [Harry:]
        Shot me out of the sky
        You're my kryptonite
        You keep making me weak
        Yeah, frozen and can't breathe
        
        [Zayn:]
        Something's gotta give now
        'Cause I'm dying just to make you see
        That I need you here with me now
        'Cause you've got that one thing
        
        [Chorus:]
        So get out, get out, get out of my head
        And fall into my arms instead
        I don't, I don't, don't know what it is
        But I need that one thing
        And you've got that one thing
        
        [Niall:]
        Now I'm climbing the walls
        But you don't notice at all
        That I'm going out of my mind
        All day and all night
        
        [Louis:]
        Something's gotta give now
        'Cause I'm dying just to know your name
        And I need you here with me now
        'Cause you've got that one thing
        
        [Chorus:]
        So get out, get out, get out of my head
        And fall into my arms instead
        I don't, I don't, don't know what it is
        But I need that one thing
        
        So get out, get out, get out of my mind
        And come on, come into my life
        I don't, I don't, don't know what it is
        But I need that one thing
        And you've got that one thing
        
        Woah-oh-oh-oh
        Woah-oh-oh-oh
        Woah-oh-oh-oh
        
        [Harry:]
        You've got that one thing
        
        [Liam:]
        Get out, get out, get out of my head
        And fall into my arms instead
        
        [Chorus:]
        So get out, get out, get out of my head
        And fall into my arms instead
        I don't, I don't, don't know what it is
        But I need that one thing
        
        So get out, get out, get out of my mind (out of my mind)
        And come on, come into my life
        I don't, I don't, don't know what it is
        But I need that one thing
        Yeah, you've got that one thing`,
        source:"/songfile/One thing.mp3",
        favourite:"13"
    },
    {
        artistcode:"3",
        albumcode:"3",
        name:"Up All Night",
        image:"https://i.scdn.co/image/ab67616d0000b2734a5584795dc73860653a9a3e",
        lyric:`[Liam:]
        It feels like we've been livin' in fast forward
        Another moment passing by
        (Up up up all night)
        The party's ending but it's now or never
        Nobody's going home tonight
        (Up up up all night)
        
        [Harry:]
        Katy Perry's on replay
        She's on replay
        DJ got the floor to shake, the floor to shake
        People going all the way
        Yeah, all the way
        I'm still wide awake
        
        [All:]
        I wanna stay up all night
        And jump around until we see the sun
        I wanna stay up all night
        And find a girl and tell her she's the one
        Hold on to the feeling
        And don't let it go
        'Cause we got the floor now
        Get out of control
        I wanna stay up all night
        And do it all with you
        
        Up all night
        Like this, all night, hey
        Up all night
        Like this, all night, hey
        Up all night
        
        [Zayn:]
        Don't even care about the table breaking
        We only wanna have a laugh
        (Up up up all night)
        I'm only thinking 'bout this girl I'm seeing
        I hope she'll wanna kiss me back
        (Up up up all night)
        
        [Harry:]
        Katy Perry's on replay
        She's on replay
        DJ got the floor to shake, the floor to shake
        People going all the way
        Yeah, all the way
        I'm still wide awake
        
        [All:]
        I wanna stay up all night
        And jump around until we see the sun
        I wanna stay up all night
        And find a girl and tell her she's the one
        Hold on to the feeling
        And don't let it go
        'Cause we got the floor now
        Get out of control
        I wanna stay up all night
        And do it all with you
        
        Up all night
        Like this, all night, hey
        Up all night
        Like this, all night, hey
        Up all night
        
        [Harry:]
        Katy Perry's on replay
        (Up all night)
        She's on replay
        (We're gonna wanna stay up all night)
        DJ got the floor to shake, the floor to shake
        (We're gonna wanna stay up all night)
        Up all night, up all night
        (We're gonna wanna stay up all night)
        
        [All:]
        I wanna stay up all night
        And jump around until we see the sun
        I wanna stay up all night
        And find a girl and tell her she's the one (she's the one)
        Hold on to the feeling
        And don't let it go
        'Cause we got the floor now
        Get out of control
        I wanna stay up all night
        And do it all with you (do it all with you)
        Up all night
        Like this, all night, hey
        Up all night
        Like this, all night, hey
        Up all night`,
        source:"/songfile/Up all night.mp3",
        favourite:"10"
    },
    {
        artistcode:"3",
        albumcode:"3",
        name:"TELL ME A LIE",
        image:"https://i1.sndcdn.com/artworks-000126453480-0z0rg5-t500x500.jpg",
        lyric:`[Liam]
        Can't ever get it right
        No matter how hard I try
        And I've tried
        
        [Zayn]
        Well, I put up a good fight
        But your words cut like knives
        And I'm tired
        
        As you break my heart again this time
        
        [Chorus:]
        Tell me I'm a screwed up mess
        That I never listen, listen
        Tell me you don't want my kiss
        That you need your distance, distance
        Tell me anything but don't you say he’s what you're missing, baby
        If he's the reason that you’re leaving me tonight
        Spare me what you think and...
        
        [Liam] tell me a lie
        
        [Liam]
        Well you're the charming type
        That little twinkle in your eye
        Gets me every time.
        
        [Harry]
        And well there must've been a time
        I was the reason for that smile
        So keep in mind
        
        [Liam]
        As you take what's left of you and I
        
        [Chorus:]
        Tell me I'm a screwed up mess
        That I never listen, listen
        Tell me you don't want my kiss
        That you need your distance, distance
        Tell me anything but don't you say he's what you're missing, baby
        If he's the reason that you’re leaving me tonight
        Spare me what you think and...
        
        Tell me a lie
        
        (Oh, oh, oh)
        Tell me a lie
        (Oh, oh, oh)
        Tell me a lie
        (Oh, oh, oh)
        Tell me a lie!
        
        [Chorus:]
        Tell me I'm a screwed up mess (mess)
        That I never listen, listen
        Tell me you don't want my kiss (kiss)
        That you need your distance, distance
        Tell me anything but don't you say he's what you're missing, baby
        If he's the reason that you’re leaving me tonight
        Spare me what you think and tell me a lie
        
        Tell me a lie!
        Tell me a lie!
        Tell me a lie!
        Tell me a lie!`,
        source:"/songfile/Tell me a lie.mp3",
        favourite:"4"
    },
    {
        artistcode:"3",
        albumcode:"3",
        name:"Best Song Ever",
        image:"https://i1.sndcdn.com/artworks-000057206282-kmqz41-t500x500.jpg",
        lyric:`[Harry:]
        Maybe it's the way she walked (wow)
        Straight into my heart and stole it
        Through the doors and passed the guards (wow)
        Just like she already owned it
        
        [Zayn:]
        I said, "Can you give it back to me?"
        She said, "Never in your wildest dreams."
        
        [All:]
        And we danced all night to the best song ever
        We knew every line
        Now I can't remember
        How it goes but I know
        That I won't forget her
        'Cause we danced all night to the best song ever
        
        I think it went oh, oh, oh
        I think it went yeah, yeah, yeah
        I think it goes...
        
        [Liam:]
        Said her name was Georgia Rose (wow)
        And her daddy was a dentist
        
        [Harry:]
        Said I had a dirty mouth (I got a dirty mouth)
        But she kissed me like she meant it
        
        [Niall:]
        I said, "Can I take you home with me?"
        She said, "Never in your wildest dreams."
        
        [All:]
        And we danced all night to the best song ever
        We knew every line
        Now I can't remember
        How it goes but I know
        That I won't forget her
        'Cause we danced all night to the best song ever
        
        I think it went oh, oh, oh
        I think it went yeah, yeah, yeah
        I think it goes...
        
        [Louis:]
        You know, I know, you know I'll remember you
        And I know, you know, I know you'll remember me
        
        (oh, oh, oh
        Yeah, yeah, yeah)
        
        [Zayn:]
        You know, I know, you know I'll remember you
        And I know, you know, I hope you remember how we danced
        How we danced
        1, 2, 1, 2, 3
        
        [All:]
        How we danced all night to the best song ever
        We knew every line
        Now I can't remember
        How it goes but I know
        That I won't forget her
        'Cause we danced all night to the best song ever
        (we danced, we danced, it goes something like, yeah)
        Danced all night to the best song ever
        We knew every line
        Now I can't remember
        How it goes but I know
        That I won't forget her
        'Cause we danced all night to the best song ever
        
        I think it went oh, oh, oh
        I think it went yeah, yeah, yeah
        I think it goes...
        
        [Zayn:]
        Best song ever
        It was the best song ever
        It was the best song ever`,
        source:"/songfile/Best song ever.mp3",
        favourite:"14"
    },
    {
        artistcode:"4",
        albumcode:"5",
        name:"Money",
        image:"https://i.scdn.co/image/ab67616d0000b273ed677d408cec6537eb0ddeeb",
        lyric:`Imagine if money just grew on trees
        I would spend the whole day planting seeds
        I wish that I could give you everything
        And treat you to the world's most beautiful things
        
        I know you don't ask for nothing
        You don't want material
        But I want to show you heaven
        And you know someday I will
        
        I'd give you every diamond ring
        Get that beach house by the sea
        We'd be living like kings and queens
        If I had money, money, money
        Give you every pair of shoes
        Saint Tropez on a yacht we'll cruise
        We'd have nothing in the world to lose
        If I had money, money, money
        
        I know that being rich can't buy your love
        Even if we're broke we won't give a fuck
        You and me will always be enough
        But you know I ain't giving up
        
        I know you don't ask for nothing
        You don't want material
        But I want to show you heaven
        And you know someday I will
        
        I'll give you every diamond ring
        Get that beach house by the sea
        We'd be living like kings and queens
        If I had money, money, money
        Give you every pair of shoes
        Saint Tropez on a yacht we'll cruise
        We'd have nothing in the world to lose
        If I had money, money, money
        
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        
        If I've got you (I've got you)
        We'd have nothing in the world to lose
        If I've got you (I've got you)
        We'd have nothing in the world to lose
        
        I'd give you every diamond ring
        Get that beach house by the sea
        We'd be living like kings and queens
        If I had money, money, money
        Give you every pair of shoes
        Saint Tropez on a yacht we'll cruise
        We'd have nothing in the world to lose
        If I had money, money, money
        
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        Where's the money
        
        If I've got you
        We'd have nothing in the world to lose`,
        source:"/songfile/Money.mp3",
        favourite:"7"
    },
    {
        artistcode:"4",
        albumcode:"5",
        name:"Where My Love Goes",
        image:"https://4.bp.blogspot.com/-5zdOPs6-w9s/Vz55G4oveZI/AAAAAAAACN4/kZq4tAqpLLU3Wu1gSn9_vZYnR6-p9Sx4ACLcB/s1600/Lawson1.jpg",
        lyric:`My love goes out of my heart and into the wind
        Out my guitar and under your skin
        Into your house and out of your headphones
        That's where my love goes
        
        Wherever you go, I'll follow
        Don't worry about tomorrow
        I will be in your shadow
        Walking right beside you everyday
        I'll be the one to save ya
        When I put my pen to paper
        Feels like it brings us closer
        Even when you're so far away
        
        Bullet trains and aeroplanes
        I can choose the easy way
        So I'll send a signal just for you
        
        My love goes out of my heart and into the wind
        Out my guitar and under your skin
        Into your house and out of your headphones
        
        My love goes out of your door and into the street
        Down through the floor and up through your feet
        Into your car and out of your radio
        That's where my love goes
        
        You will never be lonely
        Just relax and listen to me
        I'm in the air that you breathe
        I am always with you in disguise
        
        Bullet trains and aeroplanes
        I can choose the easy way
        So I'll send a signal just for you
        
        My love goes out of my heart and into the wind
        Out my guitar and under your skin
        Into your house and out of your headphones
        
        My love goes out of your door and into the street
        Down through the floor and up through your feet
        Into your car and out of your radio
        That's where my love goes
        
        That's where my love goes
        Tell me, can you hear me now
        I'm screaming out so loud
        Oh, it goes out of my heart and into the wind
        Out my guitar and under your skin
        Into your house and out of your radio
        
        Out of my heart and into the wind
        Out my guitar and under your skin
        Into your house and out of your headphones
        My love goes out of your door and into the street
        Down through the floor and up through your feet
        Into your car and out of your radio
        That's where my love goes
        Yeah, that's where my love goes
        My love goes out of your door and into the street
        Down through the floor and up through your feet
        Into your car and out of your radio
        That's where my love goes`,
        source:"/songfile/Where my love goes.mp3",
        favourite:"15"
    },
    {
        artistcode:"4",
        albumcode:"5",
        name:"Rio",
        image:"https://l-hit.com/img_id/146963.jpg?salt=06",
        lyric:`Can you feel the fever in January river?
        I can see graffiti in a Carnival city
        
        I wander down the backstreet, party on the beach, just living life like I can
        Palm tree, sugar cane, sipping on champagne, everybody's great
        
        Gonna sleep all day and dance all night
        Gonna watch the sunset in your eyes
        Gonna lose myself in paradise
        Gonna sleep all day and dance all night
        
        In Rio, in Rio, in Rio, in Rio
        
        Rio, Rio, Rio, Rio,
        Dance away the night
        Rio, Rio, Rio, Rio,
        Lost in paradise
        Rio, Rio, Rio, Rio,
        Ain't no wrong or right
        In Rio
        Rio, Rio, Rio, Rio
        Rio
        
        All the glitz and glamour at the Copacabana
        Let's lie in white sand
        I'll put your hand in my hand
        
        We'll wander down the backstreet, party on the beach, just living life like I can
        Palm tree, sugar cane, sipping on champagne, everybody's great
        
        Gonna sleep all day and dance all night
        Gonna watch the sunset in your eyes
        Gonna lose myself in paradise
        Gonna sleep all day and dance all night
        
        In Rio, in Rio, in Rio, in Rio
        
        Rio, Rio, Rio, Rio,
        Dance away the night
        Rio, Rio, Rio, Rio,
        Lost in paradise
        Rio, Rio, Rio, Rio,
        Ain't no wrong or right
        In Rio
        Rio, Rio, Rio, Rio
        Rio
        
        (Gonna think about, think about, think about you) [3x]
        
        In Rio, do it in Rio
        
        Gonna sleep all day and dance all night
        Gonna watch the sunset in your eyes
        Gonna lose myself in paradise
        Gonna sleep all day and dance all night
        
        In Rio, in Rio, in Rio, in Rio
        
        Rio, Rio, Rio, Rio,
        Dance away the night
        Rio, Rio, Rio, Rio,
        Lost in paradise
        Rio, Rio, Rio, Rio,
        'Cause there ain't no wrong or right
        In Rio
        Rio, Rio, Rio, Rio
        Rio
        
        Come on
        In Rio, in Rio
        Do it in Rio
        
        Rio, Rio, Rio, Rio,
        Dance away the night
        Rio, Rio, Rio, Rio,
        Lost in paradise
        Rio, Rio, Rio, Rio,
        Ain't no wrong or right
        In Rio
        Rio, Rio, Rio, Rio
        Rio`,
        source:"/songfile/Rio.mp3",
        favourite:"10"
    },
    {
        artistcode:"4",
        albumcode:"5",
        name:"Roads",
        image:"https://i.ytimg.com/an/6ICtoejG3Yg/92b8ccb7-b278-4ed1-95c9-fdffa66e79b6_mq.jpg?v=555217b3",
        lyric:`Hey! Forgive me father
        Up all night
        I'm going under
        I don't wanna be like you
        And you don't wanna be like me
        
        Hey! I play with matches
        Roll that dice and hope for magic
        I try to let the river flow
        And take me somewhere I don't know
        
        Oh oh oh wild horses in the night
        I'm running for my life, yeah
        
        I try to give myself away
        To give into the chase
        Night turns into day
        I drive, drive into the moon
        I pray for something new
        No matter what I do
        All roads lead to you
        All roads lead to you
        
        Hey! Can you feel that thunder?
        Get in line and take a number
        'Cause we don't wanna be like them
        And they don't wanna be like us
        
        Hey! I've crossed the ocean
        Wiped my mind with a million potions
        Tryna run away from you
        It's a game I think I'll always lose
        
        Oh oh oh wild horses in the night
        I'm running for my life, yeah
        
        I try to give myself away
        To give into the chase
        Night turns into day
        I drive, drive into the moon
        I pray for something new
        No matter what I do
        All roads lead to you
        All roads lead to you
        All roads lead to you
        
        No matter what I do every road leads right back to you
        If I win or lose every road leads right back to you
        No matter what I do every road leads right back to you
        If I win or lose every road leads right back to you
        
        Oh oh oh wild horses in the night
        I'm running for my life, yeah
        
        I try to give myself away
        To give into the chase
        Night turns into day
        I drive, drive into the moon
        I pray for something new
        No matter what I do
        All roads lead to you
        All roads lead to you
        All roads lead to you
        
        No matter what I do every road leads right back to you
        If I win or lose every road leads right back to you
        No matter what I do every road leads right back to you
        If I win or lose all roads lead to you`,
        source:"/songfile/Roads.mp3",
        favourite:"18"
    },
    {
        artistcode:"4",
        albumcode:"5",
        name:"I Look Anyway",
        image:"https://i.ytimg.com/vi/X1H5S_-mv20/maxresdefault.jpg",
        lyric:`I was walking down a long road
        Lighted by the street lights
        Drinking with the wrong girls
        Acting like a monster
        Staying out all night
        
        I was fighting all the wrong walls
        Reading all the wrong signs
        Travel back through your front doors
        I know it's the long way
        Hoping that see you light
        
        Now all I want is you
        But the one thing I can't have is you
        
        Now you've left for someone new
        I miss the boat and I lost you
        And there is nothing I can do
        
        There are no words to explain
        To search a picture of your face
        I know it causes so much pain
        
        I look anyway
        I look anyway
        
        I just can't look away
        though it causes so much pain
        
        I look anyway
        
        Keeping putting on my heart change
        It kill my only inside
        Even know what's my choice
        I just gone though un
        How can't I look away
        
        Now all I want is you
        But the one thing I can't have is you
        
        Now you've left for someone new
        I miss the boat and I lost you
        And there is nothing I can do
        
        There are no words to explain
        To search a picture of your face
        I know it causes so much pain
        
        I look anyway
        I look anyway
        
        I just can't look away
        yeah
        though it causes so much pain
        
        I look anyway
        
        I want you so bad but I can't go back
        I can't go back to the things we had
        I want you so bad but I can't go back
        I can't go back to the things we had
        
        Now you've left for someone new
        I miss the boat and I lost you
        And there is nothing I can do
        
        There are no words to explain
        To search a picture of your face
        I know it causes so much pain
        
        I look anyway
        I look anyway
        
        I just can't look away
        I say you'll never look again
        though it causes so much pain
        
        I look anyway
        
        I want you so bad but I can't go back
        I can't go back to the things we had
        I want you so bad but I can't go back
        I can't go back to the things we had`,
        source:"/songfile/I look anyway.mp3",
        favourite:"5"
    },
    {
        artistcode:"5",
        name:"I'm A Mess",
        image:"https://media.teroradio.com/pix/single/30595.jpg",
        lyric:`Everything's been so messed up here lately
        Pretty sure he don't wanna be my baby
        Oh, he don't love me, he don't love me, he don't love me, he don't love me
        But that's OK
        'Cause I love me, yeah, I love me, yeah, I love me, yeah, I love myself anyway (hey)
        
        Everything's gonna be alright
        Everything's gonna be OK
        It's gonna be a good, good life
        That's what my therapist say
        Everything's gonna be alright
        Everything's gonna be just fine
        It's gonna be a good, good life
        
        I'm a mess, I'm a loser
        I'm a hater, I'm a user
        I'm a mess for your love, it ain't new
        I'm obsessed, I'm embarrassed
        I don't trust no one around us
        I'm a mess for your love, it ain't new
        
        Nobody shows up unless I'm paying
        Have a drink on me cheers to the failing
        Oh, he don't love me, he don't love me
        He don't love me, he don't love me
        But that's okay
        Cause I love me, yeah, I love me
        Yeah, I love me, yeah, I love myself anyway
        Hey
        
        Everything's gonna be alright
        Everything's gonna be okay
        It's gonna be a good, good life
        That's what my therapist say
        Everything's gonna be alright
        Everything's gonna be just fine
        It's gonna be a good, good life
        
        I'm a mess, I'm a loser
        I'm a hater, I'm a user
        I'm a mess for your love, it ain't new
        I'm obsessed, I'm embarrassed
        I don't trust no one around us
        I'm a mess for your love, it ain't new
        
        Everything's gonna be alright, alright
        Everything's gonna be just fine, just fine
        It's gonna be a good, good life
        
        I'm a mess, I'm a loser
        I'm a hater, I'm a user
        I'm a mess for your love, it ain't new
        I'm obsessed, I'm embarrassed
        I don't trust no one around us
        I'm a mess for your love, it ain't new`,
        source:"/songfile/Im a mess.mp3",
        favourite:"21"
    },
    {
        artistcode:"5",
        name:"Meant To Be",
        image:"https://thesource4ym.com/wp-content/uploads/2017/12/Meant-To-Be-Cover.jpg",
        lyric:`[Florida Georgia Line:]
        Baby, lay on back and relax
        Kick your pretty feet up on my dash
        No need to go nowhere fast, let's enjoy right here where we at
        
        Who knows where this road is supposed to lead?
        We got nothing but time
        As long as you're right here next to me, everything's gonna be alright
        
        If it's meant to be, it'll be, it'll be
        Baby, just let it be
        If it's meant to be, it'll be, it'll be
        Baby, just let it be
        So won't you ride with me, ride with me?
        See where this thing goes
        If it's meant to be, it'll be, it'll be
        Baby, if it's meant to be
        
        [Bebe Rexha:]
        I don't mean to be so uptight
        But my heart's been hurt a couple times by a couple guys that didn't treat me right
        I ain't gon' lie, ain't gon' lie
        Cause I'm tired of the fake love, show me what you're made of
        Boy, make me believe
        
        [Florida Georgia Line:]
        Oh, hold up girl, don't you know you're beautiful?
        And it's easy to see
        
        [Bebe Rexha & Florida Georgia Line:]
        If it's meant to be, it'll be, it'll be
        Baby, just let it be
        If it's meant to be, it'll be, it'll be
        Baby just let it be
        So won't you ride with me, ride with me?
        See where this thing goes
        If it's meant to be, it'll be, it'll be
        Baby, if it's meant to be
        
        So c'mon ride with me, ride with me
        See where this thing goes
        So c'mon ride with me, ride with me
        Baby, if it's meant to be
        
        [Bebe Rexha (Florida Georgia Line) {Both}:]
        (Maybe we do)
        Maybe we don't
        (Maybe we will)
        {Maybe we won't}
        
        [Bebe Rexha & Florida Georgia Line:]
        But if it's meant to be, it'll be, it'll be
        Baby, just let it be
        If it's meant to be, it'll be, it'll be (c'mon)
        Baby, just let it be (let's go)
        So won't you ride with me, ride with me?
        See where this thing goes
        If it's meant to be, it'll be, it'll be
        Baby, if it's meant to be
        
        [Bebe Rexha (Florida Georgia Line) {Both}:]
        (If it's meant to be, it'll be, it'll be)
        {Baby, if it's meant to be}
        (If it's meant to be, it'll be, it'll be)
        {Baby, if it's meant to be}`,
        source:"/songfile/Meant to be.mp3",
        favourite:"12"
    },
    {
        artistcode:"5",
        name:"Chain My Heart",
        image:"https://upload.wikimedia.org/wikipedia/en/6/6c/Chain_My_Heart.jpg",
        lyric:`Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        
        You call my name, I feel better when you call my name
        Let's just lay here together
        
        We'll never change, I keep wishing that we'll never change
        Let's just stay here forever
        
        I've been in a high but I felt so low
        Cut me like a knife, and I did not know
        I've been in a high but I felt so low
        Ain't it funny
        
        Never going back to the way I was
        I wanna be trapped in the space of us
        Never going back to the way I was
        Now you got me
        
        And just like boom, boom, boom
        Yeah, you chained my heart
        Yeah, you chained my heart
        To your love
        
        Whatchu gon' do do do
        If it breaks apart
        Yeah, you've chained my heart
        To your love
        
        And just like
        
        Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        
        You've chained my heart
        Yeah, you've chained my heart
        To your love
        
        Was playing games, when I met you I was playing games
        It all changed in a minute
        Cause now my
        Heart is chained, and I'm freer now my heart is chained
        With your love living in it
        
        I've been in a high but I felt so low
        Cut me like a knife, and I did not know
        I've been in a high but I felt so low
        Ain't it funny
        
        Never going back to the way I was
        I wanna be trapped in the space of us
        Never going back to the way I was
        Now you got me
        
        And just like boom, boom, boom
        Yeah, you chained my heart
        Yeah, you chained my heart
        To your love
        
        Whatchu gon' do do do
        If it breaks apart
        Yeah, you've chained my heart
        To your love
        
        And just like
        
        Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        Boom boom dudu, boom boom dudududu
        
        And just like boom, boom, boom
        Yeah, you chained my heart
        Yeah, you chained my heart
        To your love
        
        Whatchu gon' do do do
        If it breaks apart
        Yeah, you've chained my heart
        To your love`,
        source:"/songfile/Chain my heart.mp3",
        favourite:"6"
    },
    {
        artistcode:"5",
        name:"Sacrifice",
        image:"https://cdns-images.dzcdn.net/images/cover/ce4d5b971ab03c1c1be6545c9243f7af/500x500.jpg",
        lyric:`I'ma need those eyes focusing on me
        Middle of the night, I'm the only star you'll see
        I'ma need those hands runnin' over me
        'Cause I ain't the type to let you go easy, so
        
        Say goodbye to every other girl in the night behind you
        Now you're mine, tell me what you're willing to sacrifice, ooh
        
        Sacrifice
        When it comes to me, don't want no compromise
        This should be the only body on your mind
        When it comes to me, I'm down for life
        So tell me, would you sacrifice?
        
        Yeah
        Sacrifice
        Tell me, would you sacrifice?
        Yeah
        Sacrifice
        Tell me, would you sacrifice?
        
        Wanna be the air every time you breathe
        Running through your veins and the spaces in between
        I wanna feel your heart every time it bleeds
        Living in your brain, there's only room for me, so
        
        Say goodbye to every other girl in the night behind you
        Now you're mine, tell me what you're willing to sacrifice, ooh
        
        Sacrifice
        When it comes to me, don't want no compromise
        This should be the only body on your mind
        When it comes to me, I'm down for life
        So tell me, would you sacrifice?
        
        Yeah
        Sacrifice
        Tell me, would you sacrifice?
        Yeah
        Sacrifice
        Tell me, would you sacrifice?
        
        Sacrifice your body to the rhythm of mine
        To the rhythm, to the rhythm of mine
        Sacrifice your body to the rhythm of mine
        To the rhythm, to the rhythm of mine
        
        Sacrifice your body to the rhythm of mine
        To the rhythm, to the rhythm of mine
        Sacrifice your body to the rhythm of mine
        So tell me, would you sacrifice?`,
        source:"/songfile/Sacrifice.mp3",
        favourite:"3"
    },
    {
        artistcode:"5",
        name:"Girl In The Mirror",
        image:"https://images-na.ssl-images-amazon.com/images/I/51cfY6kTI-L._SY445_SX342_QL70_ML2_.jpg",
        lyric:`I'm tired of my thoughts
        They weigh me down
        Feels like I'm drowning
        I'm tired of my flaws
        They fill me with anxiety and doubt
        Honestly, I'm done with hating pictures of myself
        And tryna be like everybody else
        
        I wanna be like, look like
        The girl in the mirror
        Wanna act like, dance like
        No one's watching her
        I could try to
        Be just like you
        But I wanna be like me
        The girl in the mirror
        The girl in the mirror
        The girl in the mirror
        
        I'm sick of the likes and followers everyone's counting
        I'm sick of the lies
        Smiling but I'm crying inside
        Honestly, I'm done with hating pictures of myself
        And tryna be like everybody else
        
        I wanna be like, look like
        The girl in the mirror
        Wanna act like, dance like
        No one's watching her
        I could try to
        Be just like you
        But I wanna be like me
        The girl in the mirror
        The girl in the mirror
        
        Wanna wake up, no make-up
        And still think I'm beautiful
        Wanna smile like I mean it
        And finally be comfortable with me
        Finally be comfortable with me
        Oh
        
        I wanna be like, look like
        The girl in the mirror
        Wanna act like, dance like
        No one's watching her
        I could try to
        Be just like you
        But I wanna be like me
        The girl in the mirror
        The girl in the mirror
        The girl in the mirror
        (The girl in the mirror)
        The girl in the mirror`,
        source:"/songfile/Girl in the mirror.mp3",
        favourite:"17"
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
    },
    {
        artistcode:"2",
        image:"https://www.printingnewsth.com/wp-content/uploads/2021/05/Alec-Benjamin-640x360.jpg",
        name:"Alec Benjamin"
    },
    {
        artistcode:"3",
        image:"https://files.vogue.co.th/uploads/IMG_20200415_090523_987.jpg",
        name:"One Direction"
    },
    {
        artistcode:"4",
        image:"http://musicstation.kapook.com/files_music2008/picture/2/10024.jpg",
        name:"Lawson"
    },
    {
        artistcode:"5",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAmygs-KF3AdSN6LwAMRmp8S5cSU1ei4Q-A&usqp=CAU",
        name:"Bebe Rexha"
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
                        // console.log('Artist data added!');   
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
                        artisttosong('2','Alec Benjamin');    
                        artisttosong('3','One Direction');  
                        artisttosong('4','Lawson');  
                        artisttosong('5','Bebe Rexha');  
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
                        artisttoalbum('2','Alec Benjamin');
                        artisttoalbum('3','One Direction');
                        artisttoalbum('4','AVICII');
                        artisttoalbum('5','Lawson');
                        albumtosong('0','FOREVER');
                        albumtosong('1','Meet The Vamps');
                        albumtosong('2','These Two Windows');
                        albumtosong('3','Up All Night');
                        albumtosong('4','TRUE');
                        albumtosong('5','Perspective');
                    }
                });
            });
        }
    });
}

module.exports = seedDB;