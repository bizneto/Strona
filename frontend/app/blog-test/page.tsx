import { Metadata } from "next";
import Link from "next/link";
import { blogAPI } from "@/lib/blog-api";

export const metadata: Metadata = {
  title: "Blog Test | EspoCRM Integration",
  description: "Test strony bloga z integracją EspoCRM",
};

export default async function BlogTestPage() {
  try {
    // Test API connection
    const posts = await blogAPI.getLatestPosts(5);
    
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Blog Test - EspoCRM Integration
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Status połączenia z EspoCRM:</h2>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              ✅ Połączenie z EspoCRM działa poprawnie!
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Artykuły z EspoCRM ({posts.length} znalezionych):
            </h2>
            
            {posts.length > 0 ? (
              <div className="space-y-6">
                {posts.map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-3">
                      <span>ID: {post.id}</span> | 
                      <span> Slug: {post.slug}</span> | 
                      <span> Status: {post.status}</span> | 
                      <span> Kategoria: {post.category}</span>
                    </div>
                    <div className="text-gray-700 mb-3">
                      {post.content ? (
                        <div 
                          className="prose max-w-none"
                          dangerouslySetInnerHTML={{ 
                            __html: post.content.substring(0, 300) + (post.content.length > 300 ? '...' : '')
                          }}
                        />
                      ) : (
                        <p className="text-gray-500 italic">Brak treści</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Utworzono: {new Date(post.createdAt).toLocaleDateString('pl-PL')}
                      {post.publishedAt && (
                        <span> | Opublikowano: {new Date(post.publishedAt).toLocaleDateString('pl-PL')}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">
                  Brak artykułów w EspoCRM
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Dodaj artykuły w panelu administracyjnym EspoCRM
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/finanse"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Wróć do Usług Finansowych
            </Link>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Informacje techniczne:</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>API Endpoint:</strong> https://kepr.pl/api/v1/CBlogPost</p>
              <p><strong>Encja:</strong> CBlogPost</p>
              <p><strong>Metoda:</strong> GET</p>
              <p><strong>Autoryzacja:</strong> X-Api-Key</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in BlogTestPage:', error);
    
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Blog Test - Błąd połączenia
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              ❌ Błąd połączenia z EspoCRM
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Szczegóły błędu:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {error instanceof Error ? error.message : String(error)}
            </pre>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Sprawdź:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Czy EspoCRM jest dostępne pod adresem: https://kepr.pl</li>
                <li>Czy klucz API jest poprawny: 42e09d451fa151de753dbf94b5616808</li>
                <li>Czy encja CBlogPost istnieje w EspoCRM</li>
                <li>Czy uprawnienia API są prawidłowo skonfigurowane</li>
              </ul>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/finanse"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Wróć do Usług Finansowych
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
