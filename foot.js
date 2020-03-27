function Foot() {
    this.location= function () {
        this.x=(Math.floor(Math.random() * rows ) ) * scale;
        this.y=(Math.floor(Math.random() * columns )) * scale;
    }

    this.draw= function () {
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(this.x,this.y,scale,scale)
    }
}