# VT MMO Marketplace 🎮

Nền tảng giao dịch sản phẩm số và công nghệ - Full Stack Application

## 🚀 Tính Năng Chính

✅ **Tìm kiếm & Lọc sản phẩm** (Sắp xếp, Nội bật, Bán chạy, Giá thấp/cao)
✅ **Hệ thống xác thực** (Đăng nhập, Đăng ký)
✅ **Bán hàng** (Đăng sản phẩm, Quản lý danh sách)
✅ **Tin nhắn** (Chat real-time với Socket.io)
✅ **Đánh giá & Review** (Rating sản phẩm)
✅ **Thanh toán** (Stripe API)
✅ **Dashboard Admin**
✅ **Responsive Design** (Mobile-first)
✅ **Dark Theme** (Giống GC MMO)

## 📁 Cấu Trúc Project

```
vt-mmo-marketplace/
├── backend/
│   ├── src/
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Auth & validation
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io
- **Payment**: Stripe API
- **File Upload**: Multer + Cloudinary

## 🚀 Installation & Setup

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your configuration
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## 📝 Environment Variables

### Backend (.env)

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/vt-mmo
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📖 API Endpoints

### Auth
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập

### Products
- `GET /api/products` - Danh sách sản phẩm
- `GET /api/products/:id` - Chi tiết sản phẩm
- `POST /api/products` - Tạo sản phẩm (Seller)
- `PUT /api/products/:id` - Cập nhật sản phẩm
- `DELETE /api/products/:id` - Xóa sản phẩm

### Orders
- `POST /api/orders` - Tạo đơn hàng
- `GET /api/orders` - Danh sách đơn hàng
- `GET /api/orders/:id` - Chi tiết đơn hàng

### Messages
- `GET /api/messages/:conversationId` - Lấy tin nhắn
- `POST /api/messages` - Gửi tin nhắn

### Reviews
- `GET /api/reviews/product/:productId` - Đánh giá sản phẩm
- `POST /api/reviews` - Tạo đánh giá

## 🎨 Giao Diện

- **Dark Theme**: Giống GC MMO
- **Color Scheme**: 
  - Primary: #00d4ff (Cyan)
  - Background: #1a1a1a (Dark)
  - Secondary: #222 (Darker)

## 🔒 Bảo Mật

- JWT Authentication
- Password Hashing (Bcrypt)
- CORS Configuration
- Input Validation
- Rate Limiting

## 📱 Responsive

- Mobile-first design
- Tablet support
- Desktop optimized

## 🚀 Deployment

### Backend (Heroku)
```bash
heroku create vt-mmo-api
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

## 📄 License

MIT

## 👨‍💻 Author

VT MMO Development Team
