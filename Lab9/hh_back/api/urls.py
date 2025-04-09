from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', views.VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
]
