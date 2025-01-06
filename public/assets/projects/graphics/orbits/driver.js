
function compileShader(vs_source, fs_source) {
    const vs = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vs, vs_source)
    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vs))
        throw Error("Vertex shader compilation failed")
    }

    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fs, fs_source)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fs))
        throw Error("Fragment shader compilation failed")
    }

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program))
        throw Error("Linking failed")
    }
    
    const uniforms = {}
    for(let i=0; i<gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i+=1) {
        let info = gl.getActiveUniform(program, i)
        uniforms[info.name] = gl.getUniformLocation(program, info.name)
    }
    program.uniforms = uniforms

    return program
}

var tetrahedron = {
    "triangles": [[0,1,2], [0,2,3], [0,3,1], [1,2,3]],
    "attributes": 
    [ [[1,1,1], [-1,-1,1], [-1,1,-1], [1,-1,-1]], // position
      [[1,1,1], [0,0,1], [0,1,0], [1,0,0]]] //color
}

var octahedron = {
    "triangles": [[0,1,2], [0,2,3], [0,3,4], [0,4,1], [5,1,4], [5,4,3], [5,3,2], [5,2,1]],
    "attributes": 
    [ [[1,0,0],[0,1,0],[0,0,1],[0,-1,0],[0,0,-1],[-1,0,0]], // position
      [[1,0.5,0.5],[0.5,1,0.5],[0.5,0.5,1],[0.5,0,0.5],[0.5,0.5,0],[0,0.5,0.5]]] //color
}

function setupGeometry(geom) {
    var triangleArray = gl.createVertexArray()
    gl.bindVertexArray(triangleArray)
    
    for(let i=0; i<geom.attributes.length; i+=1) {
        let buf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buf)
        let f32 = new Float32Array(geom.attributes[i].flat())
        gl.bufferData(gl.ARRAY_BUFFER, f32, gl.STATIC_DRAW)
        
        gl.vertexAttribPointer(i, geom.attributes[i][0].length, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(i)
    }

    var indices = new Uint16Array(geom.triangles.flat())
    var indexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)

    return {
        mode:gl.TRIANGLES,      // grab 3 indices per triangle
        count:indices.length,   // out of this many indices overall
        type:gl.UNSIGNED_SHORT, // each index is stored as a Uint16
        vao:triangleArray       // and this VAO knows which buffers to use
    }
}

function tick(milliseconds) {
    const seconds = milliseconds / 1000
    draw(seconds)
    requestAnimationFrame(tick) // <- only call this here, nowhere else
}

function draw(seconds) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.useProgram(program)

    // SUN
    gl.bindVertexArray(octa.vao)
    let r = m4rotY(Math.PI*seconds)
    let v = m4view([0,1,8], [0,0,0], [0,1,0])
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,r))
    gl.uniformMatrix4fv(program.uniforms.p, false, p)
    gl.drawElements(octa.mode, octa.count, octa.type, 0)

    // EARTH
    let tiltAng2 = 9*Math.PI/8
    let o2 = m4rotY(0.19*Math.PI*seconds)
    let t2 = m4trans(3,0,0)
    let c2 = m4scale(0.5,0.5,0.5)
    let s2 = m4rotAxis(3.3*Math.PI*seconds,[0, Math.cos(tiltAng2),Math.sin(tiltAng2)])
    let tilt2 = m4rotX(tiltAng2)
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,o2,t2,c2,s2, tilt2))
    gl.drawElements(octa.mode, octa.count, octa.type, 0)

    // MARS
    let tiltAng3 = 7*Math.PI/8
    let o3 = m4rotY(0.1*Math.PI*seconds)
    let t3 = m4trans(4.8,0,0)
    let c3 = m4scale(0.4,0.4,0.4)
    let s3 = m4rotAxis(1.5*Math.PI*seconds,[0, Math.cos(tiltAng3),Math.sin(tiltAng3)])
    let tilt3 = m4rotX(tiltAng3)
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,o3,t3,c3,s3,tilt3))
    gl.drawElements(octa.mode, octa.count, octa.type, 0)

    // MOON
    gl.bindVertexArray(tetra.vao)
    let o4 = m4rotY(0.8*Math.PI*seconds)
    let t4 = m4trans(1,0,0)
    let c4 = m4scale(0.16,0.16,0.16)
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,o2,t2,o4,t4,c4))
    gl.drawElements(tetra.mode, tetra.count, tetra.type, 0)

    // PHOBOS
    let o5 = m4rotY(4.5*Math.PI*seconds)
    let t5 = m4trans(0.5,0,0)
    let c5 = m4scale(0.16,0.16,0.16)
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,o3,t3,o5,t5,c5))
    gl.drawElements(tetra.mode, tetra.count, tetra.type, 0)

    // DEIMOS
    let o6 = m4rotY(2*Math.PI*seconds)
    let t6 = m4trans(1.0,0,0)
    let c6 = m4scale(0.08,0.08,0.08)
    gl.uniformMatrix4fv(program.uniforms.mv, false, m4mul(v,o3,t3,o6,t6,c6))
    gl.drawElements(tetra.mode, tetra.count, tetra.type, 0)

}

function fillScreen() {
    let canvas = document.querySelector('canvas')
    document.body.style.margin = '0'
    canvas.style.width = '100vw'
    canvas.style.height = '100vh'
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    canvas.style.width = ''
    canvas.style.height = ''
    if (window.gl) {
        gl.viewport(0,0, canvas.width, canvas.height)
        window.p = m4perspNegZ(0.1, 20, 1, canvas.width, canvas.height)
    }
}

window.addEventListener('load', setup)

async function setup() {
    window.gl = document.querySelector('canvas').getContext('webgl2')
    let vs = await fetch('/assets/projects/graphics/orbits/vs.glsl').then((res) => res.text());
    let fs = await fetch('/assets/projects/graphics/orbits/fs.glsl').then((res) => res.text());
        
    window.program = compileShader(vs,fs)
    gl.enable(gl.DEPTH_TEST)
    window.tetra = setupGeometry(tetrahedron) 
    window.octa = setupGeometry(octahedron) 
    fillScreen()
    requestAnimationFrame(tick)
}
