createTitle();

function createTitle(){
    const divTitle = document.createElement("div");
    divTitle.classList.add("title", "centralize")
    
    const label = document.createElement("div")
    divTitle.innerHTML =`BANCO DE DADOS`;

    document.body.appendChild(divTitle);

    document.querySelector(".html").style.overflowY="hidden";

    setTimeout(() => titleFadeIn(), 300);
}

function titleFadeIn(){
    document.querySelector(".title").style.opacity=1;

    setTimeout(() => {
      document.querySelector(".title").style.height="20vh";
      document.querySelector(".title").style.fontSize="2em";
        }, 1500);

    createText();
}

function createText(){
    const divText = document.createElement("div");
    divText.classList.add("text", "centralize")
    
    const label = document.createElement("div")
    divText.innerHTML =`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante. Morbi tincidunt ornare massa eget egestas purus. Morbi tincidunt augue interdum velit. Nulla aliquet porttitor lacus luctus accumsan. Ultricies tristique nulla aliquet enim tortor at auctor urna. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Mi sit amet mauris commodo quis imperdiet. Dui vivamus arcu felis bibendum ut tristique. Arcu felis bibendum ut tristique et egestas quis. Id cursus metus aliquam eleifend.

    Feugiat pretium nibh ipsum consequat. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Dis parturient montes nascetur ridiculus mus mauris. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Maecenas ultricies mi eget mauris pharetra et ultrices. Nibh tortor id aliquet lectus proin nibh nisl. Faucibus in ornare quam viverra orci sagittis. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Aliquet sagittis id consectetur purus ut faucibus. Nisi vitae suscipit tellus mauris a diam maecenas sed. Quam id leo in vitae. Sed arcu non odio euismod. Risus quis varius quam quisque id diam. Enim sit amet venenatis urna. Pellentesque dignissim enim sit amet. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Nunc congue nisi vitae suscipit tellus.
    
    Justo donec enim diam vulputate ut pharetra. Etiam erat velit scelerisque in dictum non consectetur. Convallis posuere morbi leo urna. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Leo vel orci porta non. Ac turpis egestas maecenas pharetra convallis posuere. Eleifend mi in nulla posuere sollicitudin aliquam. Elit pellentesque habitant morbi tristique senectus et netus. Eget nullam non nisi est sit amet facilisis magna. Scelerisque purus semper eget duis at tellus at. Dui ut ornare lectus sit amet est placerat in egestas. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Duis at tellus at urna. Odio pellentesque diam volutpat commodo sed.
    
    Morbi non arcu risus quis varius. Imperdiet sed euismod nisi porta. Malesuada fames ac turpis egestas sed tempus urna et. Dignissim diam quis enim lobortis scelerisque fermentum dui. At lectus urna duis convallis. Euismod in pellentesque massa placerat duis ultricies lacus. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Phasellus vestibulum lorem sed risus. Lorem mollis aliquam ut porttitor leo a. Nisi lacus sed viverra tellus in hac habitasse platea. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Aliquet bibendum enim facilisis gravida neque convallis. Urna condimentum mattis pellentesque id nibh tortor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. In hac habitasse platea dictumst vestibulum rhoncus est. Fringilla est ullamcorper eget nulla facilisi etiam. Eu consequat ac felis donec et odio. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
    
    Viverra nam libero justo laoreet sit amet. Suspendisse faucibus interdum posuere lorem. Mollis nunc sed id semper risus in hendrerit gravida. Ultrices dui sapien eget mi proin sed libero enim. Et tortor consequat id porta nibh venenatis cras. Elementum pulvinar etiam non quam lacus suspendisse. Lobortis mattis aliquam faucibus purus in. Semper eget duis at tellus at urna condimentum. Aliquet nibh praesent tristique magna. Viverra mauris in aliquam sem fringilla ut morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Facilisi cras fermentum odio eu feugiat pretium. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.
    
    Orci ac auctor augue mauris augue neque gravida in fermentum. Sed enim ut sem viverra aliquet eget sit amet. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Condimentum id venenatis a condimentum. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Facilisis gravida neque convallis a cras semper auctor neque. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Velit sed ullamcorper morbi tincidunt ornare massa eget. Porttitor eget dolor morbi non arcu. Condimentum id venenatis a condimentum. Cras ornare arcu dui vivamus arcu. Commodo odio aenean sed adipiscing. Curabitur vitae nunc sed velit. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.
    
    Quis vel eros donec ac odio tempor orci. Sit amet luctus venenatis lectus magna fringilla. Id diam vel quam elementum pulvinar. Dis parturient montes nascetur ridiculus mus mauris. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Tellus cras adipiscing enim eu turpis. Penatibus et magnis dis parturient montes nascetur ridiculus. At varius vel pharetra vel turpis. Integer malesuada nunc vel risus commodo viverra. Tellus orci ac auctor augue mauris augue neque gravida. Natoque penatibus et magnis dis. Nulla facilisi morbi tempus iaculis urna id volutpat. Nec ultrices dui sapien eget. Morbi blandit cursus risus at ultrices mi tempus. Aliquet enim tortor at auctor urna nunc id cursus metus.
    
    Condimentum id venenatis a condimentum vitae sapien. Fusce ut placerat orci nulla pellentesque dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Sit amet purus gravida quis blandit turpis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Porta lorem mollis aliquam ut porttitor leo. Mauris vitae ultricies leo integer malesuada nunc vel. Consequat mauris nunc congue nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus iaculis. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Faucibus interdum posuere lorem ipsum dolor sit. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.
    
    Massa vitae tortor condimentum lacinia quis vel eros donec. At imperdiet dui accumsan sit amet nulla facilisi. Cum sociis natoque penatibus et magnis dis parturient montes. Proin nibh nisl condimentum id venenatis a condimentum. Quis ipsum suspendisse ultrices gravida dictum fusce. Varius vel pharetra vel turpis nunc. Habitant morbi tristique senectus et netus et malesuada. Egestas dui id ornare arcu odio ut sem nulla pharetra. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Eget magna fermentum iaculis eu. Cursus mattis molestie a iaculis.
    
    Viverra tellus in hac habitasse platea dictumst vestibulum. Gravida rutrum quisque non tellus orci ac auctor. Felis donec et odio pellentesque diam volutpat. Convallis posuere morbi leo urna. Ipsum dolor sit amet consectetur adipiscing. Proin libero nunc consequat interdum varius sit amet mattis. Amet mattis vulputate enim nulla aliquet porttitor lacus. Ullamcorper malesuada proin libero nunc consequat interdum varius. Justo donec enim diam vulputate ut pharetra sit amet. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sagittis purus sit amet volutpat consequat mauris. Quisque egestas diam in arcu cursus. Augue ut lectus arcu bibendum at varius vel. Fermentum dui faucibus in ornare quam viverra orci. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tellus at urna condimentum mattis. Nibh nisl condimentum id venenatis. Ultrices tincidunt arcu non sodales neque sodales.`;

    document.body.appendChild(divText);

    setTimeout(() => textFadeIn(), 1800);
}

function textFadeIn(){
    document.querySelector(".text").style.opacity=1;
    createButtom();

    document.querySelector(".html").style.overflow="";

}

function createButtom(){
    const button = document.createElement("div");
    button.classList.add("footer")
    
    const label = document.createElement("div")
    button.innerHTML = `<div class="blur"></div>
                        <button id="btnHome">
                            INÍCIO
                        </button>`

    document.body.appendChild(button);

    setTimeout(() => {
            document.querySelector("#btnHome").style.opacity=1;
    }, 300);

    document.querySelector("#btnHome").addEventListener("click", goHome);
}

function goHome(){
    document.querySelector(".title").style.opacity=0;
    document.querySelector(".text").style.opacity=0;
    document.querySelector("#btnHome").style.opacity=0;

    setTimeout(() => {
        window.location.href = "../01-Home/home.html";
    }, 500);
}