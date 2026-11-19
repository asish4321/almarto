# ALMARTO – Complete Multi-Category E-Commerce Ecosystem

**ALMARTO** is a production-ready, scalable, multi-category e-commerce platform inspired by the operational rigor and feature depth of Amazon and Flipkart. Built from the ground up for the Indian market, ALMARTO features pan-India PIN code delivery calculations, Indian GST compliance with automated tax invoice generation, courier partner logistics integrations (Delhivery, BlueDart, Shiprocket), role-based employee administration, and high-performance server-side APIs.

---

## 1. Brand Identity & Design System

The platform strictly adheres to the official **ALMARTO** brand visual identity:

- **Royal Purple:** `#35109B` (Brand navigation, primary banners, executive accents)
- **Vibrant Orange:** `#FF7900` (High-conversion primary CTA buttons: Add to Cart, Buy Now, Place Order)
- **Background:** `#F7F7FB` (Clean, modern e-commerce canvas)
- **Main Heading Text:** `#19152B` (High-contrast typography)
- **Secondary / Muted Text:** `#777487`
- **Card Background:** `#FFFFFF` with soft shadows and rounded corners
- **Official Brand Logo:** Original proportional design preserved and served across storefront and admin.

---

## 2. Platform Architecture & Stack

- **Frontend & App Framework:** Next.js 14 (App Router) with TypeScript
- **Styling & UI Components:** Tailwind CSS with custom design tokens, Lucide React icons
- **Database & ORM:** SQLite / PostgreSQL with Prisma ORM
- **Authentication & RBAC:** Session cookies with Role-Based Access Control
- **State Management:** React Context (`AuthContext`, `CartContext`, `WishlistContext`, `PincodeContext`)
- **Invoice Engine:** Client & print-optimized GST Tax Invoice template conforming to Indian tax regulations

---

## 3. Database Schema Overview (30+ Models)

The relational schema implements full constraints, foreign keys, cascading deletes, and indexes:

1. `User` & `CustomerProfile` – Profiles, loyalty SuperCoins, account statuses
2. `Address` – Multi-address management (Home, Work, Other) with PIN code routing
3. `Category` & `Subcategory` – Multi-level category taxonomy and display order
4. `Brand` – Official manufacturer profiles with warranty links
5. `Product`, `ProductImage`, `ProductVariant` – Pricing, MRP, GST rate, stock, specifications, highlights
6. `Warehouse` & `Inventory` – Multi-hub inventory tracking and low-stock thresholds
7. `Cart` & `CartItem` – Persistent carts with real-time stock sync
8. `Wishlist` & `WishlistItem` – Saved products with instant move-to-cart
9. `Order` & `OrderItem` – Status pipeline, price snapshots, tax breakdowns
10. `Payment` – Multi-gateway records (UPI, Cards, NetBanking, COD, Razorpay)
11. `Refund` – Refund state machine and administrative settlement
12. `Coupon` & `CouponUsage` – Percentage/flat discount engine with minimum cart and cap rules
13. `Shipment` & `ShipmentTracking` – Courier integration, AWB numbers, and transit history
14. `Review` – Verified buyer ratings, comments, and helpful votes
15. `OrderReturn` – Doorstep return requests and reason tracking
16. `Banner` & `WebsiteSetting` – Homepage hero carousels and store configurations
17. `SupportTicket` & `AuditLog` – Employee activity logging and compliance audit trails

---

## 4. Key Functional Capabilities

### A. Customer Shopping Experience
- **Homepage:** Hero banner carousel, announcement ticker, category quick-browse, lightning Deals of the Day with real-time countdown timer, trending products, bestsellers, featured brands, and verified customer testimonials.
- **Search & Autocomplete:** Real-time debounced live suggestions showing thumbnail, title, department, and live price.
- **PIN Code Delivery Engine:** Instant validation for 19,000+ Indian postal codes (e.g. `560001` - Bengaluru, `110001` - Delhi, `400001` - Mumbai), calculating exact delivery days and COD eligibility.
- **Product Details:** Multi-image gallery with hover zoom, variant selector (colors, storage, sizes), price discount calculation (`₹` INR), bank offer cards, seller ratings, technical specifications table, verified reviews, and "Write a Review" modal.
- **Cart & Promo Codes:** Quantity modifiers, subtotal, MRP savings breakdown, delivery fee rules (Free above ₹499), and coupon validation (`ALMARTO500`, `WELCOME100`, `FESTIVE20`).
- **Checkout Flow:** Saved addresses selector, Add New Address form, Standard vs Express delivery speed selection, payment method selection (UPI with VPA, Cards, NetBanking, COD with security verification captcha), and server-side stock verification.
- **Customer Dashboard:** Order history, visual shipment timeline (Confirmed → Packed → Shipped → Out for Delivery → Delivered), live courier transit log, order cancellation, and return requests.
- **Indian GST Tax Invoice:** Print/save PDF tax invoice with legal company details, GSTIN, HSN codes, CGST/SGST/IGST breakdown, authorized signatory, and buyer details.

### B. Admin Control Panel (`/admin`)
- **Executive Analytics:** Real-time GMV revenue, daily revenue, monthly revenue, orders count, low-stock warnings, out-of-stock items, return requests, and interactive 14-day revenue trend chart with date filters (Today, 7D, 30D, 90D, All Time).
- **Product Catalog Management:** Add, edit, delete products, multi-image upload, SKU and variant configuration, inline stock updates, and one-click **CSV Export**.
- **Category Taxonomy:** Department and subcategory management with banner images.
- **Order Dispatch & Logistics:** Order search, status transition updater, courier partner assignment (Delhivery, BlueDart, Shiprocket, DTDC), AWB tracking generator, and invoice generation.
- **Inventory Control:** Warehouse allocation, real-time stock levels, and quick manual adjustments with audit reason logging.
- **Coupon & Offer Engine:** Create percentage or fixed discount coupons with minimum cart value and max discount cap.
- **Shipping Configuration:** Courier partner credentials, sandbox/live mode toggle, shipping fee rules, and interactive PIN code serviceability tester.
- **Role-Based Access Control (RBAC):** Configurable employee permissions:
  1. *Super Admin* – Full unrestricted platform access
  2. *Admin* – General operational management
  3. *Product Manager* – Catalog & inventory control
  4. *Order Manager* – Dispatch, AWB tracking & shipping
  5. *Customer Support* – Returns, disputes & tickets
  6. *Finance Manager* – Tax audits, revenue settlements & refunds
- **Business Settings:** Store identity, GSTIN registration number, customer support helpline, Razorpay/Cashfree gateway credentials, and emergency maintenance mode.

---

## 5. Seeded Demo Accounts & Credentials

The platform comes pre-seeded with test accounts for testing:

| Role | Email | Password | Access / Scope |
|---|---|---|---|
| **Super Admin** | `admin@almarto.com` | `admin123` | Full Admin Control Panel (`/admin`) |
| **Order Manager** | `orders@almarto.com` | `admin123` | Dispatch & Courier Management |
| **Product Manager** | `catalog@almarto.com` | `admin123` | Products, Stock & Categories |
| **Customer** | `customer@almarto.com` | `customer123` | Storefront, Orders, Wishlist (Aarav Sharma) |

*Tip: A one-click "Quick Demo Switch" is conveniently located in the header and login page to switch between roles.*

---

## 6. How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Sync database schema
npx prisma db push

# 3. Seed test products, categories, orders & settings
node prisma/seed.js

# 4. Start production server
npm run build
npm run start
```

The customer storefront is available at `http://localhost:3000` and the Admin Control Panel at `http://localhost:3000/admin`.
