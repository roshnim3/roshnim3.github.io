#version 300 es
precision highp float;

uniform float seconds;
in vec4 vPos;
out vec4 color;

void main() {
    float x = vPos.x;
    float y = vPos.y;
    float x2 = pow(vPos.x,2.0);
    float y2 = pow(vPos.y,2.0);
    float x3 = pow(vPos.x,3.0);
    float y3 = pow(vPos.y,3.0);
    float t = seconds;
    float polyR = y2 + x*y3+ x3 + y3;
    float polyG = x3 + y3 + x2*y + y;
    float polyB = x3*4.0 + x2 + x + y3 + y2 + y;
    float ang = atan(vPos.y,vPos.x);
    float rotC = cos(ang+t);
    float rotS = sin(ang+t);
    float rotB = cos(ang-t)+sin(ang-t);
    float red = cos(polyR*t)*rotB;
    float green = sin(polyG*t)*rotS;
    float blue = cos(polyB*t)*rotC;


    color = vec4(red, green, blue,1);
}
