from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status


class UserView(APIView):
    """
    POST /user
    """

    def post(self, request):
        user_serializer = UserSerializer(data=request.data)  # Request의 data를 UserSerializer로 변환

        if user_serializer.is_valid():
            user_serializer.save()  # UserSerializer의 유효성 검사를 한 뒤 DB에 저장
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)  # client에게 JSON response 전달
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    """
    GET /user
    GET /user/{user_id}
    """

    def get(self, request):
        return Response("test ok", status=200)

    """
    PUT /user/{user_id}
    """

    def put(self, request):
        return Response("test ok", status=200)

    """
    DELETE /user/{user_id}
    """

    def delete(self, request):
        return Response("test ok", status=200)