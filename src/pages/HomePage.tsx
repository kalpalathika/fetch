import { useState } from 'react'
import { DogListing } from '../components/Home/Listing/DogListing';
import { Pagination } from '../components/Home/Pagination/Pagination';
import { useFilter } from '../hooks/useFilter';
import { Layout } from '../components/Home/Layout/Layout';
import { MobileFiltersDialog } from '../components/Home/Filter/MobileFiltersDialog';
import { Header } from '../components/Home/Heaser/Header';
import { DesktopFilters } from '../components/Home/Filter/DesktopFilters';


const HomePage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const { handleSubmit } = useFilter();
  
    return (
      <Layout>
        <div className="w-screen p-4">
          <div>
            <MobileFiltersDialog
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
              onSubmit={(e) => {
                handleSubmit(e);
                setMobileFiltersOpen(false);
              }}
              test-id="mobile-filters-dialog"
            />
  
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="main">
              <Header onOpenMobileFilters={() => setMobileFiltersOpen(true)} />
  
              <section aria-labelledby="products-heading" className="pt-6 pb-24">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                   <DesktopFilters  data-testid="desktop-filters"onSubmit={handleSubmit} />
                    <div className="lg:col-span-3">
                        <DogListing data-testid="dog-listing" />
                        <div className="mt-8">
                            <Pagination data-testid="pagination" />
                        </div>
                    </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </Layout>
    );
  };

export default HomePage
