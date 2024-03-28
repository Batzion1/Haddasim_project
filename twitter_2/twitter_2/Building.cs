namespace twitter_2
{
    internal abstract class Building
    {
        public int Height { get; set; }
        public int Width { get; set; }
        public Building(int h, int w)
        {
            Height = h;
            Width = w;
        }

        public abstract int Area();
        public abstract double Print_scope();

  
    }
}
