#version 300 es
precision highp float;

out vec4 fragColor;
in vec4 color2;

void main() {
    fragColor = color2;
}