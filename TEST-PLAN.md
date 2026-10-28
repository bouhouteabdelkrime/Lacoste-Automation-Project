# Test Plan : Lacoste Website

Automated checks are marked **[automated]**. Remaining items are a prioritized
backlog and have not been verified against the live storefront.

## Homepage
- [automated] Homepage URL, title, header, navigation, content, locale language, and currency are correct for US and France
- [automated] Logo click returns to the locale homepage
- Promotional banners/carousel render without broken images
- Cookie consent banner appears once and doesn't reappear after accept

## Navigation
- [automated] Search field accepts a product query
- Main menu categories (Men/Women/Kids) open and link to the right category pages
- Footer links (stores, contact, legal) are present and not broken (no 404s)

## Search & Product Listing
- Searching a known product returns non-empty results
- [automated] Searching nonsense/empty query shows a "no results" state, not an error
- Filtering by size/color updates the product grid
- Sorting (price asc/desc) changes result order correctly

## Product Page
- Product images, price, and available sizes render
- [automated] Adding a product to the cart
- Selecting an out-of-stock size disables "Add to cart"

## Cart & Checkout
- Cart totals update correctly on quantity change
- Removing an item updates cart count and total
- Guest checkout flow reaches payment step without errors
- Promo code field accepts/rejects codes correctly

## Cross-cutting
- Responsive checks (mobile viewport) for homepage and PDP
- Basic accessibility checks (landmarks, alt text) on key pages
- Performance smoke check (page load under X seconds) on homepage

## Cross-locale
- [automated] Shared homepage, logo, category navigation, and search-input checks run for both locales
- [automated] Google search for "Lacoste US"; browser attempt aborted here and the test is excluded from CI due to captcha/session-dependent results
