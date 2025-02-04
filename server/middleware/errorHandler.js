export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
      success: false,
      error: process.env.NODE_ENV === 'production' 
        ? 'Server error' 
        : err.message
    });
  };