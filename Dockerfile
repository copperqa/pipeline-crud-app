# 1. Base image (Python)
FROM python:3.8-slim

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy all project files into container
COPY . /app

# 4. Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# 5. Set environment variable
ENV FLASK_APP=crudapp.py

# 6. Initialize database (IMPORTANT for this project)
RUN flask db init || true
RUN flask db migrate -m "init" || true
RUN flask db upgrade || true

# 7. Expose port
EXPOSE 5000

# 8. Run the app
CMD ["flask", "run", "--host=0.0.0.0"]
