export default function RGBLine() {
	//-------------------------------------------
	const turnRatio = 0.02; //how much the lines turns
	const bc = "0, 255, 233"; //RGB line color
	const speed = 10; //the line moving speed
	const lineWidth = 1;
	const backgroundColor = "#000";
	//-------------------------------------------

	const canvas = document.getElementById("rgbline-bg");
	const ctx = canvas.getContext("2d");
	//shortcuts
	const PI = Math.PI,
		rand = Math.random,
		cos = Math.cos,
		sin = Math.sin;
	//directions that the lines could go
	const dirs = [
		0,
		PI / 2,
		PI,
		(PI / 2) * 3,
		PI / 4,
		(PI / 4) * 3,
		(PI / 4) * 5,
		(PI / 4) * 7,
	];

	const onResize = () => {
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		//console.log('resized');
	};
	onResize();
	addEventListener("resize", onResize);
	const lines = [];

	function screenInit() {
		const amountParticles = Math.min(
			canvas.width * canvas.height * 0.000032,
			20,
		);
		for (let i = 0; i < amountParticles; i++) {
			lines.push(new RunningLine(canvas, ctx));
		}
		requestAnimationFrame(animateAll);
	}
	function animateAll() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		lines.forEach((v) => v.draw(ctx));
		//console.log(lines[0].x, lines[0].y)
		////console.log('aa');
		requestAnimationFrame(animateAll);
	}

	class RunningLine {
		prevTurnPoint = [];
		constructor(canvas, ctx) {
			this.init();
		}
		init() {
			this.prevTurnPoint = [];
			const r = rand();
			if (r < 0.25) {
				this.x = rand() * canvas.width;
				this.dir = dirs[1];
				this.y = 0;
			} else if (r < 0.5) {
				this.x = rand() * canvas.width;
				this.dir = dirs[3];
				this.y = canvas.height;
			} else if (r < 0.75) {
				this.x = 0;
				this.dir = dirs[0];
				this.y = rand() * canvas.height;
			} else {
				this.x = canvas.width;
				this.dir = dirs[2];
				this.y = rand() * canvas.height;
			}
			//this.dir = dirs[dirs.length*rand()^0]
			this.prevTurnPoint.push({
				x: this.x,
				y: this.y,
			});
			this.width = lineWidth;

			this.v = speed;

			this.vx = this.v * cos(this.dir);
			this.vy = this.v * sin(this.dir);
			this.fadeout = false;
			this.opacity = rand() ** 0.2;
			this.color = `rgba(${bc}, ${this.opacity})`;
			//console.log(this.x, this.y);
		}
		draw(ctx) {
			//console.log(this.opacity);
			if (this.fadeout) {
				if (this.opacity < 0.1) {
					this.init();
				} else {
					this.opacity *= 0.9;
					this.color = `rgba(${bc}, ${this.opacity})`;
					//console.log(this.opacity);
				}
			} else {
				this.outOfScreen();
				this.x += this.vx;
				this.y += this.vy;

				if (rand() < turnRatio) this.turn();
			}
			ctx.strokeStyle = this.color;
			ctx.lineWidth = this.width;
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			//let remainL = this.length;
			//let continuous = true, lastLen=0;
			for (let i = this.prevTurnPoint.length - 1; i >= 0; i--) {
				const p = this.prevTurnPoint[i];
				ctx.lineTo(p.x, p.y);
			}
			ctx.stroke();
			//ctx.filter = 'none';
			ctx.closePath();
		}
		turn() {
			const choice = dirs.filter((v) => {
				let a = Math.abs(this.dir - v);
				if (a > PI) a = 2 * PI - a;
				return a <= PI / 2;
			});
			//console.log(choice);
			this.dir = choice[(rand() * choice.length) ^ 0];
			this.vx = this.v * cos(this.dir);
			this.vy = this.v * sin(this.dir);
			this.prevTurnPoint.push({
				x: this.x,
				y: this.y,
			});
		}
		outOfScreen() {
			if (
				(this.x >= canvas.width && this.vx > 0) ||
				(this.y >= canvas.height && this.vy > 0) ||
				(this.x <= 0 && this.vx < 0) ||
				(this.y <= 0 && this.vy < 0)
			) {
				this.fadeout = true;
			}
		}
	}
	window.onload = screenInit;
}
