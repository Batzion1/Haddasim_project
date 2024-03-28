namespace twitter_2;

    internal class TriangleBuild : Building
    {
        public TriangleBuild(int h, int w) : base(h, w) { }

        public override int Area()
        {
            return (Width * Height) / 2;
        }

        public override double Print_scope()
        {
            double hypotenuse = Math.Sqrt(Math.Pow(Width / 2, 2) + Math.Pow(Height, 2));
            return hypotenuse * 2 + Width;
        }

        public void PrintTriangle()
        {
            if (Width % 2 == 0 || Width > 2 * Height)
            {
                Console.WriteLine("the triangle can not be printed");
                return;
            }

         
            printLine(1);
        
            for (int i = 0; i < (Height - 2) % (Width / 2 - 1); i++)
                printLine(3);
            for (int i = 3; i < Width; i += 2)
                for (int j = 0; j < (Height - 2) / (Width / 2 - 1); j++)
                    printLine(i);
            printLine(Width);
        }
        private void printLine(int numOfStars)
        {
            for (int i = 0; i < (Width - numOfStars) / 2; i++)
                Console.Write(" ");
            for (int i = 0; i < numOfStars; i++)
                Console.Write("*");
            Console.Write("\n");
        }
    }