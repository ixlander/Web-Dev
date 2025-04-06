from django.urls import path
from .views import (
    CompanyListAPIView, CompanyDetailAPIView, CompanyVacanciesAPIView,
    VacancyListAPIView, VacancyDetailAPIView, TopTenVacanciesAPIView
)

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),
]