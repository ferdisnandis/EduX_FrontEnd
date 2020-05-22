using System;

namespace Primeiro_POO
{
    class Program
    {
        static void Main(string[] args)
        {
            Personagem tony = new Personagem();
            tony.armadura = "Bleeding Edge";
            Console.WriteLine(tony.nome);
            Console.WriteLine(tony.armadura);
            Console.WriteLine(tony.Atacar());

            Console.WriteLine ();

           Personagem riri = new Personagem();
           riri.armadura = "Iron Heart";
           Console.WriteLine (riri.name);
           Console.WriteLine (riri.armadura);
           Console.WriteLine (riri.Atacar());
    }
}
        }
