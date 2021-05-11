from django.urls import path
from . import views

app_name = "api_user"

urlpatterns = [
    path('', views.UserView.as_view()),
    path("<int:user_id>", views.UserView.as_view()),  # urls.py는 클래스가 아닌 함수에 요청을 전달 -> 따라서 클래스를 사용하고자 하면 as_view()를 사용

    # path('', views.UserList.as_view()),
    # path("<int:user_id>", views.UserList.as_view()),  # urls.py는 클래스가 아닌 함수에 요청을 전달 -> 따라서 클래스를 사용하고자 하면 as_view()를 사용
]
