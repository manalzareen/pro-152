AFrame.registerComponent("car",{
    schema:{
        position:{type:"number" ,default:1 },
        rotation:{type:"number", default:1}
    },
    init: function(){
        this.el.setAttribute("geometery",{
        position:this.data.position,
        rotation:this.data.rotation        });
        this.el.setAttribute("material")

    },
    update:function(){
    window.addEventListener("click",e=>{
        
    })
    }
})