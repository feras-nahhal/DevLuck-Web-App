"use client"

import { useState, useCallback } from 'react'
import { api } from '@/src/lib/api'

interface Application {
  id: string
  studentId: string
  opportunityId: string
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
  appliedAt: string
  withdrawnAt?: string
  opportunity?: any
}

interface ListApplicationsResponse {
  items: Application[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

interface UseStudentApplicationHandlerReturn {
  applications: Application[]
  application: Application | null
  loading: boolean
  error: string | null
  getApplications: (page?: number, pageSize?: number, status?: string) => Promise<ListApplicationsResponse>
  getApplication: (id: string) => Promise<Application>
  createApplication: (opportunityId: string) => Promise<Application>
  withdrawApplication: (id: string) => Promise<Application>
  deleteApplication: (id: string) => Promise<void>
  clearError: () => void
}

export const useStudentApplicationHandler = (): UseStudentApplicationHandlerReturn => {
  const [applications, setApplications] = useState<Application[]>([])
  const [application, setApplication] = useState<Application | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const getApplications = useCallback(
    async (page: number = 1, pageSize: number = 10, status?: string): Promise<ListApplicationsResponse> => {
      setLoading(true)
      setError(null)
      try {
        const params: any = { page, limit: pageSize }
        if (status) params.status = status

        const response = await api.get<{ status: string; data: ListApplicationsResponse }>('/api/student/applications', {
          params
        })
        const items = response.data.data?.items || []
        setApplications(items)
        return response.data.data
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || err.message || 'Failed to get applications'
        setError(errorMessage)
        setApplications([])
        throw new Error(errorMessage)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const getApplication = useCallback(async (id: string): Promise<Application> => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.get<{ status: string; data: Application }>(`/api/student/applications/${id}`)
      setApplication(response.data.data)
      return response.data.data
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to get application'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  const createApplication = useCallback(async (opportunityId: string): Promise<Application> => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post<{ status: string; data: Application }>('/api/student/applications', {
        opportunityId
      })
      setApplications(prev => [response.data.data, ...prev])
      return response.data.data
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to create application'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  const withdrawApplication = useCallback(async (id: string): Promise<Application> => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.put<{ status: string; data: Application }>(`/api/student/applications/${id}/withdraw`)
      setApplications(prev => prev.map(app => app.id === id ? response.data.data : app))
      return response.data.data
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to withdraw application'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  const deleteApplication = useCallback(async (id: string): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      await api.delete(`/api/student/applications/${id}`)
      setApplications(prev => prev.filter(app => app.id !== id))
      if (application?.id === id) {
        setApplication(null)
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete application'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [application])

  return {
    applications,
    application,
    loading,
    error,
    getApplications,
    getApplication,
    createApplication,
    withdrawApplication,
    deleteApplication,
    clearError
  }
}

