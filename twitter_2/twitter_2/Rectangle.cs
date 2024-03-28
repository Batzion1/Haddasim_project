namespace twitter_2;


    internal class RectangleBuild : Building
    {
        public RectangleBuild(int h, int w) : base(h, w) { }

        public override int Area()
        {
            return Width * Height;
        }
        public override double Print_scope()
        {
            return (Width + Height) * 2;
        }
    }

