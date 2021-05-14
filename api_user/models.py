from django.db import models


class User(models.Model):
    user_id = models.CharField(max_length=128, null=False)
    password = models.CharField(max_length=128, null=False)
    address = models.CharField(max_length=256, null=True)

    class Meta:
        db_table = "User"  # Table이름을 "User"로 정한다 default 이름은 api_user_user가 된다.


class Todo(models.model):
    todo = models.CharField(max_length=128, null=False)
    d_day = models.DateTimeField()

    # 마감시간을 만들어서 자바스크립트에서 계산해줄까,
    # 두근두근하구만 기능 추가할 생각에!
    # 날짜 input에 날짜폼을 넣어줘야해.
