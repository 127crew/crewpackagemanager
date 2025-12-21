#include <iostream>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

int main() {
    json j;
    j["name"] = "Crew";
    j["type"] = "C++ Package Manager";
    j["awesome"] = true;

    std::cout << j.dump(4) << std::endl;
    return 0;
}
