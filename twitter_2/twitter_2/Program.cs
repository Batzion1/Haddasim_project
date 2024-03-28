
using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net.NetworkInformation;
using System.Numerics;
using twitter_2;


Console.WriteLine("Enter 1 for retangle building, 2 for triangle building, 0 to exit");

int width;
int height;
int userInput = Convert.ToInt32(Console.ReadLine());

while (userInput != 3)
{
    Console.WriteLine("Enter width and height");
    width = Convert.ToInt32(Console.ReadLine());
    height = Convert.ToInt32(Console.ReadLine());

    switch (userInput)
    {
        case 1:
            RectangleBuild NewRectangl = new RectangleBuild(height, width);
            if (width == height || width - height > 5 || height - width > 5)
                Console.WriteLine("area: " + NewRectangl.Area());
            else
                Console.WriteLine("perimeter: " + NewRectangl.Print_scope());
            break;

        case 2:
    
            TriangleBuild Newtriangle = new TriangleBuild(height, width);
            Console.WriteLine("Please enter  your choice.To print the Scope click 1");
            int choiceInput = Convert.ToInt32(Console.ReadLine());
            switch (choiceInput)
            {
                case 2:
                    Console.WriteLine(Newtriangle.Print_scope());
                    break;
                case 1:
                 
                    Newtriangle.PrintTriangle();
                    break;
            
            }

            break;
        default:
            Console.WriteLine("incorrect choice");
            break;

    }


}