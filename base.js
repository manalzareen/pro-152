AFrame.registerComponent("base",{
    schema:{
        radius:{type:"number",default:1},
        height:{type:"number",default:1}
    },
    init: function(){
        this.el.setAttribute("geometery",{
        primitive:"cylinder",
        radius:this.data.radius,
        height:this.data.height
        });
        this.el.setAttribute("material",{color:"yellow"})

    }
})