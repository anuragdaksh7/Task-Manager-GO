#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <string.h>

class Task
{
private:
  bool Done;
public:
  std::string name;
  Task(std::string name)
  {
    this->name = name;
  }
  void setDone()
  {
    this->Done = true;
  }
  void printTask()
  {
    std::cout<<this->name;
    if (this->Done) std::cout<<" Done";
    std::cout<<std::endl;
  }
};

int main(int argc, char **argv)
{


  char add[] = "add";
  if (strcmp(argv[1],add)==0){
    std::ofstream TaskFile("tasks.txt",std::ios::app);
    for (int i = 2; i< argc; i++)
    {
      TaskFile << argv[i] << " 0\n";
    }
    TaskFile.close();
  }

  char done[] = "done";
  if (strcmp(argv[1],done)==0){
    for (int i = 0; i< argc-2; i++)
    {
      std::ostringstream text;
      std::ifstream TaskFile("tasks.txt");
      std::string arg1 = argv[i+2];
      std::string arg2 = argv[i+2];
      text << TaskFile.rdbuf();
      std::string str = text.str();
      std::string str_search = arg1+" 0";
      std::string str_replace = arg2+" 1";
      size_t pos = str.find(str_search);
      // std::cout<<str_search<<" "<<str_replace<<"\n";
      str.replace(pos,std::string(str_search).length(),str_replace);
      TaskFile.close();
      

      std::ofstream TaskFile2("tasks.txt");
      TaskFile2 << str;
      TaskFile2.close();
    }
  }
  
  return 0;
}