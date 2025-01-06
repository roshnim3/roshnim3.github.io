#version 300 es

out vec4 vPos;

void main() {
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    gl_Position.x = (gl_VertexID % 2 == 0) ? 1.0 : -1.0;
    gl_Position.y = (gl_VertexID == 0 || gl_VertexID == 1 || gl_VertexID == 3) ? 1.0 : -1.0;
    vPos = gl_Position;
}


// 6 vertices:
// 0 - (1,1)
// 1 - (-1,1)
// 2 - (1,-1)
// 3 - (-1,1)
// 4 - (1,-1)
// 5 - (-1,-1)