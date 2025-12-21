#include <stdio.h>

#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"

int main() {
    printf("Crew C Example\n");
    printf("STB Image Version: %d\n", STBI_VERSION);
    
    int width, height, channels;
    // We won't actually load a file, just showing we linked the symbol
    // unsigned char *img = stbi_load("test.jpg", &width, &height, &channels, 0);
    
    printf("Successfully included and linked stb_image!\n");
    return 0;
}
