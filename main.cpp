#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <string.h>

const char add[] = "add";
const char done[] = "done";
const char help[] = "help";

int main(int argc, char **argv)
{
  if (argc <= 2)
  {
    std::cout << "Too few arguments" << std::endl;
    return 0;
  }

  if (!strcmp(argv[1], help))
  {
    std::cout << "Task add <Task List seperated by spaces> <- To add tasks\n";
    std::cout << "Task done <Task List seperated by spaces> <- To mark tasks done\n";

    return 0;
  }

  if (!strcmp(argv[1], add))
  {
    std::ofstream TaskFile("tasks.txt", std::ios::app);

    for (int i = 2; i < argc; i++)
      TaskFile << argv[i] << " 0\n";

    TaskFile.close();
  }

  if (strcmp(argv[1], done) == 0)
  {
    for (int i = 0; i < argc - 2; i++)
    {
      std::ostringstream text;
      std::ifstream TaskFile("tasks.txt");

      std::string arg1 = argv[i + 2],
                  arg2 = argv[i + 2];

      text << TaskFile.rdbuf();

      std::string str = text.str();
      std::string str_search = arg1 + " 0";
      std::string str_replace = arg2 + " 1";

      size_t pos = str.find(str_search);

      str.replace(pos, std::string(str_search).length(), str_replace);
      TaskFile.close();

      std::ofstream TaskFile2("tasks.txt");
      TaskFile2 << str;
      TaskFile2.close();
    }
  }

  return 0;
}