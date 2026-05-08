console.log("lest to it")

async function song_main() {
    let song = await fetch("http://127.0.0.1:3000/audio/")
    let response = await song.text()

    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response

    let as = div.getElementsByTagName("a")
    let all_song = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            all_song.push(element.href.split("/audio/")[1])
        }

    }
    // console.log(all_song)

    return all_song
}

async function name() {

    let song_list = await song_main()
    console.log(song_list)
    let songul = document.querySelector(".songList").getElementsByTagName("ul")[0]
    // show all song
    for (const element of song_list) {

        songul.innerHTML = songul.innerHTML + `<li>${element.replaceAll("%20", " ")}</li>`
    }

    // let audio_play =new Audio(song_list[0])
    // // audio_play.play()
    // audio_play.addEventListener("loadeddata",()=>{
    //     let duration = audio_play.duration
    //     console.log(duration,audio_play.currentSrc,audio_play.currentTime)    
    // })
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        console.log(e)
        e.addEventListener("click", async() => {
            let time=0
            play = e.innerText
            let song =new Audio(`http://127.0.0.1:3000/audio/${play}`)
            if (time==0){
                time+=1
    
                // 2. Play the song
                song.play()
                console.log(play)
            
            }else{
                time=0
                song.pause()
                song.currentTime= 0
            }
            // async function name() {
            //     let = await fetch(`http://127.0.0.1:3000/audio/${""}`)
            // }
        })
    })

}
name()
