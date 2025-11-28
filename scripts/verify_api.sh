#!/bin/bash

BASE_URL="http://localhost:3000"

echo "Testing API Endpoints..."

# Test GET Comments
echo "1. Testing GET /api/comments..."
response=$(curl -s -w "%{http_code}" $BASE_URL/api/comments)
http_code=${response: -3}
content=${response:0:${#response}-3}

if [ "$http_code" -eq 200 ]; then
  echo "✅ GET /api/comments success"
  # echo $content | grep -o '"comments":' # Simple check
else
  echo "❌ GET /api/comments failed with $http_code"
  echo "Response: $content"
fi

# Test POST Comment
echo "2. Testing POST /api/comments..."
# Note: This will actually insert data if the DB is connected.
# We'll use a test comment.
response=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name": "TestUser", "message": "This is a test comment from the verification script."}' -w "%{http_code}" $BASE_URL/api/comments)
http_code=${response: -3}
content=${response:0:${#response}-3}

if [ "$http_code" -eq 200 ]; then
  echo "✅ POST /api/comments success"
else
  echo "❌ POST /api/comments failed with $http_code"
  echo "Response: $content"
fi

# Test GET Stories
echo "3. Testing GET /api/stories..."
response=$(curl -s -w "%{http_code}" $BASE_URL/api/stories)
http_code=${response: -3}
content=${response:0:${#response}-3}

if [ "$http_code" -eq 200 ]; then
  echo "✅ GET /api/stories success"
else
  echo "❌ GET /api/stories failed with $http_code"
  echo "Response: $content"
fi

echo "Done."
